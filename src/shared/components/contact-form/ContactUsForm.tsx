import { useFormContext } from 'react-hook-form';
import { Button } from '../../../components/Button';
import { ContactUsInput } from './ContactUsInput';
import { ContactUsFormData } from '../../schemas/contactUsSchema';

type ContactUsFormProps = {
  onFormSubmit: (data: ContactUsFormData) => void;
  isLoading: boolean;
  displayWhite?: boolean;
};

export const ContactUsForm = ({
  onFormSubmit,
  isLoading,
  displayWhite = true,
}: ContactUsFormProps) => {
  const labelClass = displayWhite ? 'text-white' : 'text-slate-900';
  const inputClass = displayWhite
    ? 'bg-white/5 text-white'
    : 'bg-transparent border border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:bg-white focus:outline-none ';

  const {
    register,
    formState: { isDirty, isValid, errors },
    handleSubmit,
  } = useFormContext<ContactUsFormData>();

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <ContactUsInput
          id="first-name"
          label="First name"
          wrapperClassName="sm:col-span-1"
          className={inputClass}
          labelClassName={labelClass}
          error={errors?.firstName?.message}
          {...register('firstName')}
        />
        <ContactUsInput
          id="last-name"
          label="Last name"
          wrapperClassName="sm:col-span-1"
          className={inputClass}
          labelClassName={labelClass}
          error={errors?.lastName?.message}
          {...register('lastName')}
        />
        <ContactUsInput
          id="email"
          label="Email"
          type="email"
          className={inputClass}
          labelClassName={labelClass}
          error={errors?.email?.message}
          {...register('email')}
        />
        <ContactUsInput
          id="phone-number"
          label="Phone number"
          className={inputClass}
          labelClassName={labelClass}
          error={errors?.phone?.message}
          {...register('phone')}
        />
        <div className="relative sm:col-span-2">
          <label
            htmlFor="message"
            className={`block text-sm/6 font-semibold ${labelClass}`}
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              rows={4}
              className={`block w-full rounded-md px-3.5 py-2 text-base ${inputClass}`}
              {...register('message')}
            />
          </div>
          <p
            className={
              'text-sm text-red-500 absolute bottom-0 translate-y-[calc(100%+0.25rem)]'
            }
          >
            {errors?.message?.message}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Button
          className="w-full"
          disabled={!isValid || !isDirty || isLoading}
          isLoading={isLoading}
          onClick={handleSubmit(onFormSubmit)}
        >
          Send message
        </Button>
      </div>
    </form>
  );
};
