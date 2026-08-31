import type {
  NextFunction,
  Request,
  Response,
} from "express";

import type { AccessTokenPayload } from "../lib/jwt.js";

type UserRole = AccessTokenPayload["role"];

export const requireRole = (...allowedRoles: UserRole[]) => {
  return (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (!req.auth) {
      return res.status(401).json({
        message: "Usuario no autenticado",
      });
    }

    if (!allowedRoles.includes(req.auth.role)) {
      return res.status(403).json({
        message: "No tenés permisos para realizar esta acción",
      });
    }

    next();
  };
};