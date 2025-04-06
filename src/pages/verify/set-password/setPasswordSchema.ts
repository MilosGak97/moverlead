import * as zod from 'zod';

const passwordSchema = zod
  .string()
  .min(5, { message: 'Password must be at least 5 characters' })
  .max(20, { message: 'Password must be at most 20 characters' });

export const setPasswordSchema = zod
  .object({
    password: passwordSchema,
    confirmPassword: zod.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type SetPasswordFormData = zod.infer<typeof setPasswordSchema>;
