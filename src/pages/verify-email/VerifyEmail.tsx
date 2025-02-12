import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../api/api.ts';
import { routes } from '../../router/routes.ts';
import { useToast } from '../../hooks/useToast.ts';
import { Toast } from '../../components/Toast.tsx';

const VerifyEmail = () => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { toastText: successToastText, addToast: addSuccessToast } = useToast();
  const { toastText: errorToastText, addToast: addErrorToast } = useToast();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () => {
      setError(null);
      setSuccess(null);
      return api.auth.authControllerVerifyEmail({ requestBody: { pin } });
    },
    onSuccess: (response) => {
      addSuccessToast(response.message);
      setSuccess(response.message);
      navigate(routes.dashboard);
    },
    onError: () => {
      setError('Verification failed');
      addErrorToast();
    },
  });

  return (
    <div className="space-y-12 mt-8 px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-12 md:grid-cols-3">
        <div>
          <h2 className="text-base/7 font-semibold text-gray-900">
            Verify Email
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            We have sent you an email with a 6-Digit Pin Code. Please enter it
            here to verify your email account.
          </p>
        </div>

        <div className="flex max-w-2xl flex-col">
          <div className="sm:col-span-4">
            <label
              htmlFor="pincode"
              className="block text-sm/6 font-medium text-gray-900"
            >
              6-Digit Pin Code
            </label>
            <div className="mt-2">
              <input
                id="pincode"
                name="pincode"
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter Here"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => mutate()}
            className="mt-4 rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2]"
          >
            Verify Email
          </button>

          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
        </div>
      </div>

      {/* Toast Notification */}
      {errorToastText && <Toast text={errorToastText} />}

      {/* Toast Notification */}
      {successToastText && <Toast text={successToastText} type={'success'} />}
    </div>
  );
};

export default VerifyEmail;
