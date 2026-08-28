import express from "express";

import { prisma } from "./config/prisma.js";
import authRouter from "./modules/auth/auth.routes.js";

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Kiosquito API funcionando",
  });
});

app.get("/api/health/db", async (req, res) => {
  try {
    const result = await prisma.$queryRaw<
      Array<{
        database_name: string;
        database_user: string;
      }>
    >`
      SELECT
        current_database() AS database_name,
        current_user AS database_user
    `;

    res.status(200).json({
      status: "ok",
      message: "PostgreSQL conectado correctamente",
      database: result[0],
    });
  } catch (error) {
    console.error("Error conectando con PostgreSQL:", error);

    res.status(500).json({
      status: "error",
      message: "No se pudo conectar con PostgreSQL",
    });
  }
});

app.use("/api/auth", authRouter);

export default app;