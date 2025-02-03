import { SlimLayout } from './components/SlimLayout.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './components/Logo.tsx';
import { TextField } from './components/Fields.tsx';
import { Button } from './components/Button.tsx';
import { FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../api/api.ts';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: () =>
      api.auth.authControllerLogin({ requestBody: { email, password } }),
    onSuccess: () => {
      navigate('/dashboard');
    },
    onError: () => {
      setToast('Invalid email or password. Please try again.');
      setEmailError(true);
      setPasswordError(true);

      setTimeout(() => {
        setEmailError(false);
        setPasswordError(false);
        setToast(null);
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
          to="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>
      <form
        onSubmit={handleFormSubmit}
        className="mt-10 grid grid-cols-1 gap-y-8"
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
        />
        <div>
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-slide-in">
          {toast}
        </div>
      )}
    </SlimLayout>
  );
};

export default Login;
