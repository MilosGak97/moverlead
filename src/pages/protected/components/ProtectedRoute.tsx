import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { routes } from '../../../router/routes';
import { UserStatus } from '../../../enums/userStatus';
import { RouteLoading } from '../../../shared/components/route-loading/RouteLoading';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data, isLoading, isError } = useAuth();

  if (isLoading) {
    return <RouteLoading />;
  }

  if (isError) {
    return <Navigate to={routes.auth.login} />;
  }

  if (data?.status === UserStatus.NOT_VERIFIED)
    return <Navigate to={routes.verify.notVerifiedEmail} />;

  if (data?.status === UserStatus.FORGOT_PASSWORD)
    return <Navigate to={routes.verify.setPassword} />;

  return children;
};
