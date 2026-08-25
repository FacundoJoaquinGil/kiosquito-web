import { loadEnvFile } from "node:process";

try {
  loadEnvFile();
} catch {
  // En producción las variables pueden venir directamente
  // del entorno y no existir un archivo .env.
}

const PORT = Number(process.env.PORT ?? 3000);
const NODE_ENV = process.env.NODE_ENV ?? "development";
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL no está definida");
}

export const env = {
  PORT,
  NODE_ENV,
  DATABASE_URL,
};