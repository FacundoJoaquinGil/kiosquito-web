import { hash } from "@node-rs/argon2";

import { prisma } from "../../config/prisma.js";
import { UserRole } from "../../generated/prisma/enums.js";

import type { RegisterInput } from "./auth.schema.js";

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