import { z } from "zod"

/** The schema specifies what types of data are expected for each field and any constraints they must satisfy `(e.g., required, email format, minimum length)`. */
export const emailSchema = z.object({
    email: z
        .string({ required_error: `Email is required !` })
        .trim()
        .min(1, { message: `Email is required` })
        .email(`Invalid email format`)
});

export type TEmailSchema = z.infer<typeof emailSchema>;