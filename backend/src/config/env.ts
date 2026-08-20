import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { loadEnvFile } from "node:process";

const envPath = resolve(process.cwd(), ".env");

if (existsSync(envPath)) {
  loadEnvFile(envPath);
}

const PORT = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(PORT) || PORT <= 0 || PORT > 65535) {
  throw new Error("PORT debe ser un número de puerto válido");
}

export const env = {
  PORT,
  NODE_ENV: process.env.NODE_ENV ?? "development",
};