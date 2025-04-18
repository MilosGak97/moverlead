import { useMutation } from '@tanstack/react-query';
import { ChangePasswordDto } from '../../../generated-api';
import { api } from '../../../api/api';
import { useToast } from '../../../hooks/useToast';
import {
  UpdatePasswordFormData,
  updatePasswordSchema,
} from '../schema/updatePasswordSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toast } from '../../../components/Toast';
import { Button } from '../../../components/Button';

export const UpdatePassword = () => {
  const { toastText, addToast } = useToast();
  const {
    toastText: successChangePasswordToastText,
    addToast: addSuccessChangePasswordToast,
  } = useToast();

  const {
    register,
    formState: { isValid, isDirty },
    reset,
    handleSubmit,
  } = useForm<UpdatePasswordFormData>({
    mode: 'onChange',
    resolver: zodResolver(updatePasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ChangePasswordDto) => {
      return api.settings.settingsControllerChangePassword({
        requestBody: data,
      });
    },
    onSuccess: () => {
      addSuccessChangePasswordToast(
        'Your password has been successfully updated.'
      );
      reset();
    },
    onError: () => addToast(),
  });

  const handleUpdatePasswordFormSubmit = (data: UpdatePasswordFormData) => {
    mutate({
      password: data.currentPassword,
      newPassword: data.newPassword,
      newPasswordRepeat: data.repeatPassword,
    });
  };

  return (
    <form>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 border-b pb-12">
          <div>
            <h2 className="text-base/7 font-semibold text-slate-900">
              Update Password
            </h2>
            <p className="mt-1 text-sm/6 text-slate-600">
              Update your password associated with your account.
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Current Password
              </label>
              <div className="mt-2">
                <input
                  id="current_password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('currentPassword')}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-slate-900"
              >
                New Password
              </label>
              <div className="mt-2">
                <input
                  id="new_password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('newPassword')}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Repeat Password
              </label>
              <div className="mt-2">
                <input
                  id="repeat_password"
                  type="password"
                  autoComplete="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('repeatPassword')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          type="submit"
          disabled={!isValid || !isDirty || isPending}
          isLoading={isPending}
          onClick={handleSubmit(handleUpdatePasswordFormSubmit)}
        >
          Save
        </Button>
      </div>
      {toastText && <Toast text={toastText} />}
      {successChangePasswordToastText && (
        <Toast text={successChangePasswordToastText} type="success" />
      )}
    </form>
  );
};
