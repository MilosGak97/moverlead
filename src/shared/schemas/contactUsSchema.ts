import * as zod from 'zod';

export const contactUsSchema = zod.object({
  firstName: zod
    .string()
    .min(1, 'First name is required')
    .max(30, 'First name must be 30 characters or less'),
  lastName: zod
    .string()
    .min(1, 'Last name is required')
    .max(30, 'Last name must be 30 characters or less'),
  email: zod
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  phone: zod.string().min(1, 'Phone number is required'),
  message: zod
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be 1000 characters or less'),
});

export type ContactUsFormData = zod.infer<typeof contactUsSchema>;
