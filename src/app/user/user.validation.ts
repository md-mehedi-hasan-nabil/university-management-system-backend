import { z } from "zod";

const userValidationSchema = z.object({
    name: z.string({
        required_error: "Name is required.",
        invalid_type_error: "Name must be a string."
    }),
    password: z.string().max(20, { message: "Password can not be more than 20." }).optional(),
    role: z.enum(['student', 'faculty', 'admin']),
    isDeleted: z.boolean().optional()
})

export default userValidationSchema;
