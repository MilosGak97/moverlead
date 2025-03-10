import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { routes } from '../../../../router/routes';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, isError } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Navigate to={routes.auth.login} />;
  }

  return children;
};
