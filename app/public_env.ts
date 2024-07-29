import { z } from "zod";

const env = z.object({
  NEXT_PUBLIC_VARIABLE: z.string(),
});

export const { NEXT_PUBLIC_VARIABLE } = env.parse({
  // This is the only way to make sure Next.js substitutes the env variable at build time.
  NEXT_PUBLIC_VARIABLE: process.env.NEXT_PUBLIC_VARIABLE,
});
