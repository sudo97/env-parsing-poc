import "server-only";
import { z } from "zod";

// I recommend these helpers, but it's fine to just use `z.*`
const envar = z.string();
const boolean = envar.regex(/^true$|^false$/).transform(z.boolean().parse);

const env = z.object({
  NEXT_PUBLIC_VARIABLE: envar,
  NON_PUBLIC_VARIABLE: envar,
  SOME_BOOLEAN: boolean,
  // try to uncomment this
  // NON_EXISTENT_VARIABLE: envar,
  // vs this
  NON_EXISTENT_VARIABLE: envar.optional(),
});

// On the server it is safe to use process.env, but on the client it is not.
export const {
  NEXT_PUBLIC_VARIABLE,
  NON_PUBLIC_VARIABLE,
  SOME_BOOLEAN,
  NON_EXISTENT_VARIABLE,
} = env.parse(process.env);
