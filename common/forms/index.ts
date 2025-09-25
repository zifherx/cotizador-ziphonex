import z from "zod";

export const formularioLoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type FormularioLoginType = z.infer<typeof formularioLoginSchema>;
