import { Button } from '../../../components/Button';
import { ContactUsInput } from './ContactUsInput';

type ContactUsFormProps = {
  displayWhite?: boolean;
};

export const ContactUsForm = ({ displayWhite = true }: ContactUsFormProps) => {
  const labelClass = displayWhite ? 'text-white' : 'text-slate-900';
  const inputClass = displayWhite
    ? 'bg-white/5 text-white'
    : 'bg-transparent border border-slate-200 bg-slate-50 text-slate-900 focus:border-primary focus:bg-white focus:outline-none ';

  return (
    <form>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <ContactUsInput
          id="first-name"
          label="First name"
          wrapperClassName="sm:col-span-1"
          className={inputClass}
          labelClassName={labelClass}
        />
        <ContactUsInput
          id="last-name"
          label="Last name"
          wrapperClassName="sm:col-span-1"
          className={inputClass}
          labelClassName={labelClass}
        />
        <ContactUsInput
          id="email"
          label="Email"
          type="email"
          className={inputClass}
          labelClassName={labelClass}
        />
        <ContactUsInput
          id="phone-number"
          label="Phone number"
          className={inputClass}
          labelClassName={labelClass}
        />
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className={`block text-sm/6 font-semibold ${labelClass}`}
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className={`block w-full rounded-md px-3.5 py-2 text-base ${inputClass}`}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button className="w-full">Send message</Button>
      </div>
    </form>
  );
};
