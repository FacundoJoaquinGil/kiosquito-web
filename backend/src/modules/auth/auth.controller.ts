import type { Request, Response } from "express";

import { Prisma } from "../../generated/prisma/client.js";

import { InactiveUserError, InvalidCredentialsError } from "./auth.errors.js";

import { loginSchema, registerSchema } from "./auth.schema.js";

import { loginUser, registerBusiness } from "./auth.service.js";

export const register = async (req: Request, res: Response) => {
  const validation = registerSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      status: "error",
      message: "Los datos enviados no son válidos",

      errors: validation.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  try {
    const result = await registerBusiness(validation.data);

    return res.status(201).json({
      status: "success",
      message: "Negocio registrado correctamente",
      data: result,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return res.status(409).json({
        status: "error",
        message: "Ya existe una cuenta registrada con ese email",
      });
    }

    console.error("Error registrando negocio:", error);

    return res.status(500).json({
      status: "error",
      message: "Ocurrió un error al registrar el negocio",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const validation = loginSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      status: "error",
      message: "Los datos enviados no son válidos",

      errors: validation.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  try {
    const result = await loginUser(validation.data);

    return res.status(200).json({
      status: "success",
      message: "Inicio de sesión correcto",
      data: result,
    });
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return res.status(401).json({
        status: "error",
        message: "Email o contraseña incorrectos",
      });
    }

    if (error instanceof InactiveUserError) {
      return res.status(403).json({
        status: "error",
        message: "La cuenta está desactivada",
      });
    }

    console.error("Error iniciando sesión:", error);

    return res.status(500).json({
      status: "error",
      message: "Ocurrió un error al iniciar sesión",
    });
  }
};
