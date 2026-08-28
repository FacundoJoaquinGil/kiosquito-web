import type {
  NextFunction,
  Request,
  Response,
} from "express";

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

  const match = authorization.match(
    /^Bearer\s+(\S+)$/i,
  );

  if (!match) {
    return res.status(401).json({
      message: "Formato de autenticación inválido",
    });
  }

  const token = match[1];

  try {
    const auth = await verifyAccessToken(token);

    req.auth = auth;

    next();
  } catch {
    return res.status(401).json({
      message: "Token inválido o expirado",
    });
  }
};