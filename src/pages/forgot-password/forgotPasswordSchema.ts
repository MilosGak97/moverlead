import * as zod from 'zod';

export const forgotPasswordSchema = zod.object({
  email: zod.string().email().nonempty('Email is required'),
});

export type ForgotPasswordFormData = zod.infer<typeof forgotPasswordSchema>;
