import { jwtVerify, SignJWT } from "jose";

import { env } from "../config/env.js";

const JWT_ISSUER = "kiosquito-api";
const JWT_AUDIENCE = "kiosquito-web";

export const ACCESS_TOKEN_EXPIRES_IN_SECONDS = 60 * 60;

const secret = Buffer.from(env.JWT_SECRET, "base64url");

type AccessTokenPayload = {
  userId: string;
  businessId: string;
  role: "OWNER" | "EMPLOYEE";
};

export const createAccessToken = async ({
  userId,
  businessId,
  role,
}: AccessTokenPayload) => {
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
    .setExpirationTime("1h")
    .sign(secret);
};

export const verifyAccessToken = async (token: string) => {
  return jwtVerify(token, secret, {
    algorithms: ["HS256"],
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE,
  });
};