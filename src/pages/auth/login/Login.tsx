import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Button.tsx';
import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../../api/api.ts';
import { routes } from '../../../router/routes.ts';
import { useToast } from '../../../hooks/useToast.ts';
import { Toast } from '../../../components/Toast.tsx';
import { SlimLayout } from '../components/SlimLayout.tsx';
import { Logo } from '../../../components/Logo.tsx';
import { TextField } from '../../web/home/components/Fields.tsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { toastText, addToast } = useToast();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      api.auth.authControllerLogin({ requestBody: { email, password } }),
    onSuccess: () => {
      navigate(routes.dashboard);
    },
    onError: () => {
      setEmailError(true);
      setPasswordError(true);

      addToast('Invalid email or password. Please try again.');
      setTimeout(() => {
        setEmailError(false);
        setPasswordError(false);
      }, 5000);
    },
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <SlimLayout>
      <div className="flex">
        <Link to="/" aria-label="Home">
          <Logo />
        </Link>
      </div>
      <h2 className="mt-16 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don’t have an account?{' '}
        <Link
          to={routes.auth.register}
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>
      <form
        onSubmit={handleFormSubmit}
        className="mt-10 mb-6 grid grid-cols-1 gap-y-8"
      >
        <TextField
          label="Email address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          className={emailError ? 'border-red-500' : ''}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          className={passwordError ? 'border-red-500' : ''}
          renderRightSideLabel={
            <Link
              to={routes.auth.forgotPassword}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          }
        />
        <div>
          <Button
            type="submit"
            rounded={'full'}
            className="w-full"
            isLoading={isPending}
          >
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
      {toastText && <Toast text={toastText} />}
    </SlimLayout>
  );
};

export default Login;
