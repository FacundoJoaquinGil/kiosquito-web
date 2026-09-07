// import { hash } from "argon2";
import { hash } from "@node-rs/argon2";

import { prisma } from "../../config/prisma.js";

import type { AccessTokenPayload } from "../../lib/jwt.js";

import {
  CannotManageUserError,
  EmailAlreadyInUseError,
  InvalidRoleAssignmentError,
  UserNotFoundError,
} from "./users.errors.js";

type CurrentRole = AccessTokenPayload["role"];

type AssignableRole = "MANAGER" | "EMPLOYEE";

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  role: AssignableRole;
};

type UpdateUserInput = {
  name?: string;
  email?: string;
  role?: AssignableRole;
  isActive?: boolean;
};

export const getBusinessUsers = async (
  businessId: string,
) => {
  return prisma.user.findMany({
    where: {
      businessId,
    },

    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },

    orderBy: {
      createdAt: "asc",
    },
  });
};

export const createBusinessUser = async ({
  businessId,
  currentRole,
  input,
}: {
  businessId: string;
  currentRole: CurrentRole;
  input: CreateUserInput;
}) => {
  if (
    currentRole === "MANAGER" &&
    input.role !== "EMPLOYEE"
  ) {
    throw new InvalidRoleAssignmentError();
  }

  if (currentRole === "EMPLOYEE") {
    throw new InvalidRoleAssignmentError();
  }

  const normalizedEmail = input.email
    .trim()
    .toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: {
      email: normalizedEmail,
    },

    select: {
      id: true,
    },
  });

  if (existingUser) {
    throw new EmailAlreadyInUseError();
  }

  const passwordHash = await hash(input.password);

  return prisma.user.create({
    data: {
      businessId,
      name: input.name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: input.role,
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
};

export const updateBusinessUser = async ({
  businessId,
  currentRole,
  userId,
  input,
}: {
  businessId: string;
  currentRole: CurrentRole;
  userId: string;
  input: UpdateUserInput;
}) => {
  const targetUser = await prisma.user.findFirst({
    where: {
      id: userId,
      businessId,
    },

    select: {
      id: true,
      role: true,
    },
  });

  if (!targetUser) {
    throw new UserNotFoundError();
  }

  /*
   * El OWNER no se administra desde /api/users.
   */
  if (targetUser.role === "OWNER") {
    throw new CannotManageUserError();
  }

  /*
   * Un MANAGER solamente puede administrar EMPLOYEE.
   */
  if (
    currentRole === "MANAGER" &&
    targetUser.role !== "EMPLOYEE"
  ) {
    throw new CannotManageUserError();
  }

  if (currentRole === "EMPLOYEE") {
    throw new CannotManageUserError();
  }

  /*
   * Un MANAGER tampoco puede promover un empleado
   * a MANAGER.
   */
  if (
    currentRole === "MANAGER" &&
    input.role &&
    input.role !== "EMPLOYEE"
  ) {
    throw new InvalidRoleAssignmentError();
  }

  let normalizedEmail: string | undefined;

  if (input.email !== undefined) {
    normalizedEmail = input.email
      .trim()
      .toLowerCase();

    const existingUser =
      await prisma.user.findFirst({
        where: {
          email: normalizedEmail,
          NOT: {
            id: userId,
          },
        },

        select: {
          id: true,
        },
      });

    if (existingUser) {
      throw new EmailAlreadyInUseError();
    }
  }

  return prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      name:
        input.name !== undefined
          ? input.name.trim()
          : undefined,

      email: normalizedEmail,

      role: input.role,

      isActive: input.isActive,
    },

    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      isActive: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};