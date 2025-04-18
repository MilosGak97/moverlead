import { useFormContext } from 'react-hook-form';
import { ControlledForm } from '../../../components/ControlledForm';
import { SetPasswordFormData, setPasswordSchema } from './setPasswordSchema';
import { Button } from '../../../components/Button';
import { useToast } from '../../../hooks/useToast';
import { api } from '../../../api/api';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { useMutation } from '@tanstack/react-query';
import { Toast } from '../../../components/Toast';
import { useState } from 'react';
import { DataStatus } from '../../../components/DataStatus';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { Dialog } from '../../../components/Dialog';

export const SetPasswordView = () => {
  const navigate = useNavigate();
  const { toastText, addToast } = useToast();
  const [isPasswordChangedSuccessfully, setIsPasswordChangedSuccessfully] =
    useState(false);

  const {
    register,
    formState: { isDirty, isValid, errors },
    handleSubmit,
  } = useFormContext<SetPasswordFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SetPasswordFormData) => {
      return api.auth.authControllerResetPassword({ requestBody: data });
    },
    onSuccess: () => {
      setIsPasswordChangedSuccessfully(true);
    },
    onError: () => addToast(),
  });

  const handleFormSubmit = (data: SetPasswordFormData) => {
    if (isPending) return;

    mutate(data);
  };

  return (
    <>
      <Dialog isDialogOpen={isPasswordChangedSuccessfully}>
        <DataStatus
          icon={<CheckBadgeIcon className="w-16 text-primary" />}
          title="Password Set Successfully!"
          description={
            'Your new password has been set. You can now access your account and continue to your dashboard.'
          }
          buttonText="Go to Dashboard"
          onButtonClick={() => navigate(routes.dashboard)}
        />
      </Dialog>
      <div className="max-w-4xl">
        <h2 className="text-lg font-semibold text-gray-900">
          Set your new password
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Please enter your new password and confirm it.
        </p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="flex flex-col gap-8 mt-6 mb-10">
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="set-password--password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <input
                id="set-password--password"
                type="text"
                autoComplete="set-password--password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                placeholder="New password"
                {...register('password')}
              />
              <p
                className={
                  'text-sm text-red-500 absolute bottom-0 translate-y-[calc(100%+0.25rem)]'
                }
              >
                {errors.password?.message}
              </p>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label
                htmlFor="set-password--confirm-password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm password
              </label>
              <input
                id="set-password--confirm-password"
                type="text"
                autoComplete="set-password--confirm-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                placeholder="Confirm password"
                {...register('repeatPassword')}
              />
              <p
                className={
                  'text-sm text-red-500 absolute bottom-0 translate-y-[calc(100%+0.25rem)]'
                }
              >
                {errors.repeatPassword?.message}
              </p>
            </div>
          </div>
          <Button
            className="w-full"
            disabled={!isDirty || !isValid}
            rounded={'full'}
            type={'submit'}
            isLoading={isPending}
          >
            Confirm
          </Button>
        </form>
        {toastText && <Toast text={toastText} />}
      </div>
    </>
  );
};

export const SetPassword = () => {
  return (
    <ControlledForm schema={setPasswordSchema}>
      <SetPasswordView />
    </ControlledForm>
  );
};
