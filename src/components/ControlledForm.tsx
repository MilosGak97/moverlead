import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

type ControlledFormProps = {
  schema: ZodType;
  children: ReactNode;
  defaultValues?: FieldValues;
};

export const ControlledForm = ({
  schema,
  children,
  defaultValues,
}: ControlledFormProps) => {
  const methods = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues,
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
