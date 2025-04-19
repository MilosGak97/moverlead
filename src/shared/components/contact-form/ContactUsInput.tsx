import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type ContactUsInputProps = {
  id: string;
  label: string;
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const ContactUsInput = forwardRef<HTMLInputElement, ContactUsInputProps>(
  (
    { id, label, error, wrapperClassName, className, labelClassName, ...rest },
    ref
  ) => {
    return (
      <div className={twMerge('relative sm:col-span-2', wrapperClassName)}>
        <label
          htmlFor={id}
          className={twMerge(
            'block text-sm/6 font-semibold text-white',
            labelClassName
          )}
        >
          {label}
        </label>
        <div className="mt-2.5">
          <input
            id={id}
            name={id}
            ref={ref}
            className={twMerge(
              `block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white  ${className}`
            )}
            {...rest}
          />
        </div>
        <p
          className={
            'text-sm text-red-500 absolute bottom-0 translate-y-[calc(100%+0.25rem)]'
          }
        >
          {error}
        </p>
      </div>
    );
  }
);

ContactUsInput.displayName = 'ContactUsInput';
