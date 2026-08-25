import { z } from "zod";

export const registerSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(2, {
      error: "El nombre del negocio debe tener al menos 2 caracteres",
    })
    .max(100, {
      error: "El nombre del negocio es demasiado largo",
    }),

  ownerName: z
    .string()
    .trim()
    .min(2, {
      error: "El nombre debe tener al menos 2 caracteres",
    })
    .max(100, {
      error: "El nombre es demasiado largo",
    }),

  email: z
    .string()
    .trim()
    .transform((value) => value.toLowerCase())
    .pipe(
      z.email({
        error: "El email no es válido",
      }),
    ),

  password: z
    .string()
    .min(8, {
      error: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(128, {
      error: "La contraseña es demasiado larga",
    }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .transform((value) => value.toLowerCase())
    .pipe(
      z.email({
        error: "El email no es válido",
      }),
    ),

  password: z.string().min(1, {
    error: "La contraseña es obligatoria",
  }),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export type LoginInput = z.infer<typeof loginSchema>;