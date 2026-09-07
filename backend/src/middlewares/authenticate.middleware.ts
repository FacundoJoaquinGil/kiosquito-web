import type {
  NextFunction,
  Request,
  Response,
} from "express";

import { prisma } from "../config/prisma.js";
import { verifyAccessToken } from "../lib/jwt.js";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({
      message: "Token de autenticación requerido",
    });
  }

  const [scheme, token] = authorization.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      message: "Formato de autorización inválido",
    });
  }

  let payload;

  try {
    payload = await verifyAccessToken(token);
  } catch {
    return res.status(401).json({
      message: "Token inválido o expirado",
    });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: payload.userId,
        businessId: payload.businessId,
      },

      select: {
        id: true,
        businessId: true,
        role: true,
        isActive: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Usuario no encontrado",
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        message: "Usuario inactivo",
      });
    }

    req.auth = {
      userId: user.id,
      businessId: user.businessId,
      role: user.role,
    };

    return next();
  } catch (error) {
    console.error(
      "Error verificando usuario autenticado:",
      error,
    );

    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};