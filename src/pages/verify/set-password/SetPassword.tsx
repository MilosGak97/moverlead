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

export const SetPasswordView = () => {
  const navigate = useNavigate();
  const { toastText, addToast } = useToast();

  const {
    register,
    formState: { isDirty, isValid, errors },
    handleSubmit,
  } = useFormContext<SetPasswordFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SetPasswordFormData) => {
      //TODO - change api enpoint to forgot password
      return api.auth.authControllerVerifyEmail({
        requestBody: { pin: data.password },
      });
    },
    onSuccess: () => navigate(routes.dashboard),
    onError: () => addToast(),
  });

  const handleFormSubmit = (data: SetPasswordFormData) => {
    if (isPending) return;

    mutate(data);
  };

  return (
    <div>
      <h2 className="mt-16 text-lg font-semibold text-gray-900">
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
              {...register('confirmPassword')}
            />
            <p
              className={
                'text-sm text-red-500 absolute bottom-0 translate-y-[calc(100%+0.25rem)]'
              }
            >
              {errors.confirmPassword?.message}
            </p>
          </div>
        </div>
        <Button
          className="w-full"
          disabled={!isDirty || !isValid}
          rounded={'full'}
          type={'submit'}
        >
          {isPending ? 'Loading...' : 'Confirm'}
        </Button>
      </form>
      {toastText && <Toast text={toastText} />}
    </div>
  );
};

export const SetPassword = () => {
  return (
    <ControlledForm schema={setPasswordSchema}>
      <SetPasswordView />
    </ControlledForm>
  );
};
