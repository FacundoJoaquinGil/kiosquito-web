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

  const [scheme, token] = authorization.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({
      message: "Formato de autorización inválido",
    });
  }

  try {
    const payload = await verifyAccessToken(token);

    req.auth = payload;

    next();
  } catch {
    return res.status(401).json({
      message: "Token inválido o expirado",
    });
  }
};