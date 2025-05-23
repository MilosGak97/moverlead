import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { useToast } from '../../../hooks/useToast';
import { DataStatus } from '../../../components/DataStatus';
import { Dialog } from '../../../components/Dialog';
import { routes } from '../../../router/routes';
import { SlimLayout } from '../components/SlimLayout';
import { Logo } from '../../../components/Logo';
import { TextField } from '../../web/home/components/Fields';
import { Button } from '../../../components/Button';
import { Toast } from '../../../components/Toast';
import { api } from '../../../api/api';

const Register = () => {
  const navigate = useNavigate();
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const { toastText, addToast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatPassword: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      api.auth.authControllerRegister({ requestBody: formData }),
    onSuccess: () => {
      setIsRegistrationSuccess(true);
    },
    onError: (err) => {
      addToast(err.message);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    mutate();
  };

  return (
    <>
      <Dialog isDialogOpen={isRegistrationSuccess}>
        <DataStatus
          icon={<CheckBadgeIcon className="w-16 text-primary" />}
          title="Registration Successful!"
          description={
            <p>
              A verification email has been sent to{' '}
              <span className="text-primary font-medium">{formData.email}</span>
              . Please check your inbox (and spam folder) to confirm your email
              address.
            </p>
          }
          buttonText="Go to Login"
          onButtonClick={() => navigate(routes.auth.login)}
        />
      </Dialog>
      <SlimLayout>
        <div className="flex">
          <Link to="/" aria-label="Home">
            <Logo />
          </Link>
        </div>
        <h2 className="mt-16 text-lg font-semibold text-gray-900">
          Get started for free
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Already registered?{' '}
          <Link
            to={routes.auth.login}
            className="font-medium text-blue-600 hover:underline"
          >
            Sign in
          </Link>{' '}
          to your account.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            label="Last name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <TextField
            className="col-span-full"
            label="Company name"
            name="companyName"
            type="text"
            autoComplete="company-name"
            required
            value={formData.companyName}
            onChange={handleInputChange}
          />
          <TextField
            className="col-span-full"
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            className="col-span-full"
            label="Phone number"
            name="phoneNumber"
            type="text"
            required
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <TextField
            className="col-span-full"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            className="col-span-full"
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            autoComplete="new-password"
            required
            value={formData.repeatPassword}
            onChange={handleInputChange}
          />
          <div className="col-span-full">
            <Button
              type="submit"
              className="w-full"
              rounded={'full'}
              isLoading={isPending}
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
        {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
        <div className="mt-6 w-full text-sm text-gray-600">
          By entering your information above and clicking the button, you agree
          to our Terms of Use, Privacy Policy, and that we may contact you, by
          SMS, at the phone number and email address you provide in accordance
          with our Terms of Use.
        </div>
      </SlimLayout>
      {toastText && <Toast text={toastText} />}
    </>
  );
};

export default Register;
