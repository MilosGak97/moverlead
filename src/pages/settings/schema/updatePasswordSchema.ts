import * as zod from 'zod';

export const updatePasswordSchema = zod.object({
  currentPassword: zod.string().trim().nonempty(),
  newPassword: zod.string().trim().nonempty(),
  repeatPassword: zod.string().trim().nonempty(),
});

export type UpdatePasswordFormData = zod.infer<typeof updatePasswordSchema>;
