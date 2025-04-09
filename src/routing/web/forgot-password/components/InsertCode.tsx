import { useMutation } from '@tanstack/react-query';
import { api } from '../../../../api/api';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../router/routes';
import { useToast } from '../../../../hooks/useToast';
import VerificationInput from 'react-verification-input';
import { Toast } from '../../../../components/Toast';
import { PuffLoader } from 'react-spinners';

type InsertCodeProps = {
  email: string;
};

export const InsertCode = ({ email }: InsertCodeProps) => {
  const navigate = useNavigate();
  const { toastText: errorToastText, addToast: addErrorToast } = useToast();
  const { toastText: resendCodeToast, addToast: addResendCodeToast } =
    useToast();

  const { mutate: insertCodeMutate, isPending: isPendingInsertCodeMutate } =
    useMutation({
      mutationFn: (code: string) => {
        //TODO - change api enpoint to enter forgot password code
        return api.auth.authControllerVerifyEmail({
          requestBody: { pin: code },
        });
      },
      onSuccess: () => {
        //TODO - change api navigation route to enter new password
        navigate(routes.verify.setPassword);
      },
      onError: () => addErrorToast(),
    });

  const { mutate: resendCodeMutate, isPending: isPendingResendCodeMutate } =
    useMutation({
      mutationFn: () => {
        //TODO - change api enpoint to forgot password
        return api.auth.authControllerVerifyEmail({
          requestBody: { pin: email },
        });
      },
      onSuccess: () => addResendCodeToast('Code resent successfully!'),
      onError: () => addErrorToast(),
    });

  const handleResendCode = () => {
    if (isPendingResendCodeMutate) return;

    resendCodeMutate();
  };

  return (
    <>
      <h2 className="mt-16 text-lg font-semibold text-gray-900">
        Enter verification code
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        We’ve sent a verification code to your email. Enter the code below to
        continue resetting your password.
      </p>
      <div className="relative">
        <VerificationInput
          placeholder={''}
          classNames={{
            container: 'flex justify-center gap-2 my-8 container',
            character: `text-center border border-gray-300 rounded-md bg-white text-gray-900 placeholder:text-gray-400 outline-none transition-all ${
              isPendingInsertCodeMutate ? 'pointer-events-none opacity-50' : ''
            }`,

            characterInactive: 'border-gray-300 text-gray-400',
            characterSelected:
              'border-primary ring-2 ring-primary ring-opacity-50',
          }}
          validChars={'0-9'}
          onComplete={insertCodeMutate}
        />
        {isPendingInsertCodeMutate && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
            <PuffLoader size={'2rem'} color={'#4379F2'} />
          </div>
        )}
      </div>
      <p className="mt-2 text-sm text-gray-700 flex items-center gap-2">
        Didn't get the code?{' '}
        <button
          onClick={handleResendCode}
          className="font-medium text-blue-600 hover:underline h-10"
        >
          {isPendingResendCodeMutate ? (
            <PuffLoader size={'2rem'} color={'#4379F2'} className="absolute" />
          ) : (
            'Resend code'
          )}
        </button>
      </p>
      {errorToastText && <Toast text={errorToastText} />}
      {resendCodeToast && <Toast text={resendCodeToast} />}
    </>
  );
};
