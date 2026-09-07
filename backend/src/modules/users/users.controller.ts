import type {
  Request,
  Response,
} from "express";

import {
  CannotManageUserError,
  EmailAlreadyInUseError,
  InvalidRoleAssignmentError,
  UserNotFoundError,
} from "./users.errors.js";

import {
  createBusinessUser,
  getBusinessUsers,
  updateBusinessUser,
} from "./users.service.js";

const isAssignableRole = (
  role: unknown,
): role is "MANAGER" | "EMPLOYEE" => {
  return (
    role === "MANAGER" ||
    role === "EMPLOYEE"
  );
};

export const getUsers = async (
  req: Request,
  res: Response,
) => {
  if (!req.auth) {
    return res.status(401).json({
      message: "Usuario no autenticado",
    });
  }

  try {
    const users = await getBusinessUsers(
      req.auth.businessId,
    );

    return res.status(200).json({
      users,
    });
  } catch (error) {
    console.error(
      "Error obteniendo usuarios:",
      error,
    );

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
) => {
  if (!req.auth) {
    return res.status(401).json({
      message: "Usuario no autenticado",
    });
  }

  const {
    name,
    email,
    password,
    role,
  } = req.body;

  if (
    typeof name !== "string" ||
    name.trim().length < 2
  ) {
    return res.status(400).json({
      message: "El nombre es inválido",
    });
  }

  if (
    typeof email !== "string" ||
    !email.includes("@")
  ) {
    return res.status(400).json({
      message: "El email es inválido",
    });
  }

  if (
    typeof password !== "string" ||
    password.length < 8
  ) {
    return res.status(400).json({
      message:
        "La contraseña debe tener al menos 8 caracteres",
    });
  }

  if (!isAssignableRole(role)) {
    return res.status(400).json({
      message:
        "El rol debe ser MANAGER o EMPLOYEE",
    });
  }

  try {
    const user = await createBusinessUser({
      businessId: req.auth.businessId,
      currentRole: req.auth.role,

      input: {
        name,
        email,
        password,
        role,
      },
    });

    return res.status(201).json({
      message: "Usuario creado correctamente",
      user,
    });
  } catch (error) {
    if (error instanceof EmailAlreadyInUseError) {
      return res.status(409).json({
        message: error.message,
      });
    }

    if (
      error instanceof InvalidRoleAssignmentError
    ) {
      return res.status(403).json({
        message: error.message,
      });
    }

    console.error(
      "Error creando usuario:",
      error,
    );

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

type UpdateUserParams = {
  userId: string;
};

export const updateUser = async (
  req: Request<UpdateUserParams>,
  res: Response,
) => {
  if (!req.auth) {
    return res.status(401).json({
      message: "Usuario no autenticado",
    });
  }

  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      message: "ID de usuario inválido",
    });
  }

  const {
    name,
    email,
    role,
    isActive,
  } = req.body;

  if (
    role !== undefined &&
    !isAssignableRole(role)
  ) {
    return res.status(400).json({
      message:
        "El rol debe ser MANAGER o EMPLOYEE",
    });
  }

  if (
    isActive !== undefined &&
    typeof isActive !== "boolean"
  ) {
    return res.status(400).json({
      message: "isActive debe ser boolean",
    });
  }

  try {
    const user = await updateBusinessUser({
      businessId: req.auth.businessId,
      currentRole: req.auth.role,
      userId,

      input: {
        name,
        email,
        role,
        isActive,
      },
    });

    return res.status(200).json({
      message: "Usuario actualizado correctamente",
      user,
    });
  } catch (error) {
    if (error instanceof UserNotFoundError) {
      return res.status(404).json({
        message: error.message,
      });
    }

    if (
      error instanceof CannotManageUserError ||
      error instanceof InvalidRoleAssignmentError
    ) {
      return res.status(403).json({
        message: error.message,
      });
    }

    if (error instanceof EmailAlreadyInUseError) {
      return res.status(409).json({
        message: error.message,
      });
    }

    console.error(
      "Error actualizando usuario:",
      error,
    );

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};