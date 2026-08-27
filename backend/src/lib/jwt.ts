import { jwtVerify, SignJWT } from "jose";

import { env } from "../config/env.js";

const JWT_ISSUER = "kiosquito-api";
const JWT_AUDIENCE = "kiosquito-web";

export const ACCESS_TOKEN_EXPIRES_IN_SECONDS = 15 * 60;
// 15 minutos = 900 segundos

const secret = Buffer.from(env.JWT_SECRET, "base64url");

export type AccessTokenPayload = {
  userId: string;
  businessId: string;
  role: "OWNER" | "EMPLOYEE";
};

const isValidRole = (
  role: unknown,
): role is AccessTokenPayload["role"] => {
  return role === "OWNER" || role === "EMPLOYEE";
};

export const createAccessToken = async ({
  userId,
  businessId,
  role,
}: AccessTokenPayload) => {
  const expirationTime =
    Math.floor(Date.now() / 1000) +
    ACCESS_TOKEN_EXPIRES_IN_SECONDS;

  return new SignJWT({
    businessId,
    role,
  })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setSubject(userId)
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(secret);
};

export const verifyAccessToken = async (
  token: string,
): Promise<AccessTokenPayload> => {
  const { payload } = await jwtVerify(token, secret, {
    algorithms: ["HS256"],
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE,
    typ: "JWT",
  });

  const userId = payload.sub;
  const businessId = payload.businessId;
  const role = payload.role;

  if (
    typeof userId !== "string" ||
    typeof businessId !== "string" ||
    !isValidRole(role)
  ) {
    throw new Error("Invalid access token payload");
  }

  return {
    userId,
    businessId,
    role,
  };
};