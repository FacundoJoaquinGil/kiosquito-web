import { hash, verify } from "@node-rs/argon2";

import { prisma } from "../../config/prisma.js";
import { UserRole } from "../../generated/prisma/enums.js";

import {
  ACCESS_TOKEN_EXPIRES_IN_SECONDS,
  createAccessToken,
} from "../../lib/jwt.js";

import {
  InactiveUserError,
  InvalidCredentialsError,
} from "./auth.errors.js";

import type {
  LoginInput,
  RegisterInput,
} from "./auth.schema.js";


// ======================================================
// REGISTER
// ======================================================

export const registerBusiness = async ({
  businessName,
  ownerName,
  email,
  password,
}: RegisterInput) => {
  const passwordHash = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
    outputLen: 32,
  });

  return prisma.$transaction(async (tx) => {
    const business = await tx.business.create({
      data: {
        name: businessName,
      },

      select: {
        id: true,
        name: true,
        createdAt: true,
      },
    });

    const user = await tx.user.create({
      data: {
        businessId: business.id,
        name: ownerName,
        email,
        passwordHash,
        role: UserRole.OWNER,
      },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    return {
      business,
      user,
    };
  });
};


// ======================================================
// LOGIN
// ======================================================

export const loginUser = async ({
  email,
  password,
}: LoginInput) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },

    select: {
      id: true,
      businessId: true,
      name: true,
      email: true,
      passwordHash: true,
      role: true,
      isActive: true,

      business: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  if (!user) {
    throw new InvalidCredentialsError();
  }

  const passwordIsValid = await verify(
    user.passwordHash,
    password,
  );

  if (!passwordIsValid) {
    throw new InvalidCredentialsError();
  }

  if (!user.isActive) {
    throw new InactiveUserError();
  }

  const accessToken = await createAccessToken({
    userId: user.id,
    businessId: user.businessId,
    role: user.role,
  });

  return {
    accessToken,
    tokenType: "Bearer",
    expiresIn: ACCESS_TOKEN_EXPIRES_IN_SECONDS,

    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },

    business: user.business,
  };
};