import { jwtVerify, SignJWT } from "jose";

import { env } from "../config/env.js";

const JWT_ISSUER = "kiosquito-api";
const JWT_AUDIENCE = "kiosquito-web";

export const ACCESS_TOKEN_EXPIRES_IN_SECONDS = 60 * 60 * 8;

const secret = Buffer.from(env.JWT_SECRET, "base64url");

export type AccessTokenPayload = {
  userId: string;
  businessId: string;
  role: "OWNER" | "MANAGER" | "EMPLOYEE";
};

const isValidRole = (
  role: unknown,
): role is AccessTokenPayload["role"] => {
  return (
    role === "OWNER" ||
    role === "MANAGER" ||
    role === "EMPLOYEE"
  );
};

export const createAccessToken = async ({
  userId,
  businessId,
  role,
}: AccessTokenPayload) => {
  return new SignJWT({
    userId,
    businessId,
    role,
  })
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuer(JWT_ISSUER)
    .setAudience(JWT_AUDIENCE)
    .setIssuedAt()
    .setExpirationTime(`${ACCESS_TOKEN_EXPIRES_IN_SECONDS}s`)
    .sign(secret);
};

export const verifyAccessToken = async (
  token: string,
): Promise<AccessTokenPayload> => {
  const { payload } = await jwtVerify(token, secret, {
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE,
    algorithms: ["HS256"],
  });

  const { userId, businessId, role } = payload;

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