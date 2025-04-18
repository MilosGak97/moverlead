import { EnvelopeIcon } from '@heroicons/react/20/solid';
import { DataStatus } from '../../../components/DataStatus';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../../api/api';
import { useToast } from '../../../hooks/useToast';
import { Toast } from '../../../components/Toast';

export const NotVerifiedEmail = () => {
  const { toastText, addToast } = useToast();
  const {
    toastText: emailSuccessfullyResendToastText,
    addToast: addEmailSuccessfullyResendToast,
  } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      return api.auth.authControllerSendVerificationEmail();
    },
    onSuccess: () => {
      addEmailSuccessfullyResendToast(
        'Verification email sent! Check your inbox or spam folder'
      );
    },
    onError: () => addToast(),
  });

  return (
    <>
      <DataStatus
        icon={<EnvelopeIcon className="w-16 text-primary" />}
        title="Email Not Verified!"
        description={
          'Your account has been created, but you need to verify your email address to access all the platform. Please check your inbox (and spam folder) for the verification email we sent you.'
        }
        buttonText="Resend New Verification Email"
        onButtonClick={mutate}
        isLoading={isPending}
      />
      {toastText && <Toast text={toastText} />}
      {emailSuccessfullyResendToastText && (
        <Toast text={emailSuccessfullyResendToastText} type={'success'} />
      )}
    </>
  );
};
