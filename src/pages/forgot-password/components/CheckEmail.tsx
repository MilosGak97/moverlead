import { CheckBadgeIcon } from '@heroicons/react/20/solid';

type CheckEmailProps = {
  email: string;
};

export const CheckEmail = ({ email }: CheckEmailProps) => {
  return (
    <div className="text-center flex flex-col justify-center gap-5">
      <div>
        <CheckBadgeIcon className="w-20 mx-auto text-success" />
        <h2 className="text-2xl font-bold text-gray-900">Check Your Email</h2>
      </div>
      <p className="text-gray-700">
        We've sent a password reset link to{' '}
        <span className="font-semibold text-primary block">{email}</span>
      </p>
      <p className="text-gray-700">
        Please click the link in the email to reset your password. If you don't
        see the email, check your spam or junk folder.
      </p>
    </div>
  );
};
