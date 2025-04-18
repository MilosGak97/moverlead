import { useFormContext } from 'react-hook-form';
import { ControlledForm } from '../../../../components/ControlledForm';
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from '../forgotPasswordSchema';
import { useToast } from '../../../../hooks/useToast';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../../../api/api';
import { BaseSyntheticEvent } from 'react';
import { Button } from '../../../../components/Button';
import { Toast } from '../../../../components/Toast';

type InsertEmailProps = {
  onMutationSuccess: (email: string) => void;
};

export const InsertEmailView = ({ onMutationSuccess }: InsertEmailProps) => {
  const { toastText, addToast } = useToast();

  const {
    register,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useFormContext<ForgotPasswordFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email }: ForgotPasswordFormData) => {
      console.log(email);
      return api.auth.authControllerForgotPassword({
        requestBody: { email },
      });
    },
    onSuccess: (_, { email }) => {
      onMutationSuccess(email);
    },
    onError: () => addToast(),
  });

  const handleFormSubmit = (
    data: ForgotPasswordFormData,
    event?: BaseSyntheticEvent
  ) => {
    event?.preventDefault();
    mutate(data);
  };

  return (
    <>
      <h2 className="mt-16 text-lg font-semibold text-gray-900">
        Reset your password
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Enter your email to receive a verification code and set a new password.
      </p>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mt-6 mb-8">
          <label
            htmlFor="forgot-password-email"
            className="block text-sm/6 font-medium text-gray-900 mb-2"
          >
            Email
          </label>
          <input
            id="forgot-password-email"
            type="text"
            autoComplete="forgot-password-email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            placeholder="Enter your email address"
            {...register('email')}
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={!isDirty || !isValid}
          rounded={'full'}
          isLoading={isPending}
        >
          Send code
        </Button>
      </form>
      {toastText && <Toast text={toastText} />}
    </>
  );
};

export const InsertEmail = (props: InsertEmailProps) => {
  return (
    <ControlledForm schema={forgotPasswordSchema}>
      <InsertEmailView {...props} />
    </ControlledForm>
  );
};
