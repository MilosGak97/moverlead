import * as zod from 'zod';

export const subscribeToBlogsSchema = zod.object({
  email: zod.string().email(),
});

export type SubscribeToBlogsFormData = zod.infer<typeof subscribeToBlogsSchema>;
