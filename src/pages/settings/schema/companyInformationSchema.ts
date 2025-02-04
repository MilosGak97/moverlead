import * as zod from 'zod';

export const companyInformationSchema = zod.object({
  companyName: zod.string().trim().nonempty(),
  addressLine1: zod.string().trim().nonempty(),
  addressLine2: zod.string().trim().nonempty(),
  city: zod.string().trim().nonempty(),
  state: zod.string().trim().nonempty(),
  zip: zod.string().trim().nonempty(),
  website: zod.string().url(),
  phoneNumber: zod.string().trim().nonempty(),
});

export type CompanyInformationFormData = zod.infer<
  typeof companyInformationSchema
>;
