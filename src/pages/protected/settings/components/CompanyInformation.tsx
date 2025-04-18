import { useFormContext } from 'react-hook-form';
import { CompanyInformationFormData } from '../schema/companyInformationSchema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../../../../hooks/useToast';
import { PatchCompanyDto } from '../../../../generated-api';
import { api } from '../../../../api/api';
import { QueryKeys } from '../../../../enums/queryKeys';
import { Button } from '../../../../components/Button';
import { Toast } from '../../../../components/Toast';

export const CompanyInformation = () => {
  const queryClient = useQueryClient();
  const { toastText, addToast } = useToast();
  const {
    toastText: successUpdatedToastText,
    addToast: addSuccessUpdatedToast,
  } = useToast();

  const {
    register,
    formState: { isDirty, isValid },
    handleSubmit,
  } = useFormContext<CompanyInformationFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: PatchCompanyDto) => {
      return api.settings.settingsControllerPatchCompany({ requestBody: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.COMPANY] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.WHO_AM_I] });
      addSuccessUpdatedToast(
        '"Your company profile has been successfully updated.'
      );
    },
    onError: () => addToast(),
  });

  const handleCompanyInformationFormSubmit = (
    data: CompanyInformationFormData
  ) => {
    mutate(data);
  };

  return (
    <form>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 border-b pb-12">
          <div>
            <h2 className="text-base/7 font-semibold text-slate-900">
              Basic Information
            </h2>
            <p className="mt-1 text-sm/6 text-slate-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label className="block text-sm/6 font-medium text-slate-900">
                Company name
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('companyName')}
                />
              </div>
            </div>
            {/*
                        <div className="col-span-full">
                            <label htmlFor="photo" className="block text-sm/6 font-medium text-slate-900">
                                Logo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon aria-hidden="true" className="size-12 text-slate-300"/>
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                        */}
            <div className="col-span-full">
              <label
                htmlFor="address-line-1"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Address Line 1
              </label>
              <div className="mt-2">
                <input
                  id="address-line-1"
                  type="text"
                  autoComplete="address-line-1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('address')}
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="address-line-2"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Address Line 2
              </label>
              <div className="mt-2">
                <input
                  id="address-line-2"
                  type="text"
                  autoComplete="address-line-2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('address2')}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm/6 font-medium text-slate-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('city')}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm/6 font-medium text-slate-900"
              >
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('state')}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm/6 font-medium text-slate-900"
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                  {...register('zip')}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Website
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-slate-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                  <input
                    id="username"
                    type="text"
                    placeholder=""
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline focus:outline-0 sm:text-sm/6"
                    {...register('website')}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="phone_number"
                className="block text-sm/6 font-medium text-slate-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-slate-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-primary">
                  <input
                    id="phone_number"
                    type="text"
                    placeholder=""
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-slate-900 placeholder:text-slate-400 focus:outline focus:outline-0 sm:text-sm/6"
                    {...register('phoneNumber')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <Button
          type="submit"
          disabled={!isValid || !isDirty || isPending}
          isLoading={isPending}
          onClick={handleSubmit(handleCompanyInformationFormSubmit)}
        >
          Save
        </Button>
      </div>
      {toastText && <Toast text={toastText} />}
      {successUpdatedToastText && (
        <Toast text={successUpdatedToastText} type="success" />
      )}
    </form>
  );
};
