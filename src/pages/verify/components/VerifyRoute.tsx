import { ReactNode } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { UserStatus } from '../../../enums/userStatus';
import { RouteLoading } from '../../../shared/components/route-loading/RouteLoading';

type VerifyRouteProps = {
  children: ReactNode;
};

export const VerifyRoute = ({ children }: VerifyRouteProps) => {
  const { pathname } = useLocation();
  const { data, isLoading, isError } = useAuth();

  if (pathname === routes.verify.root)
    return <Navigate to={routes.auth.login} />;

  if (isLoading) {
    return <RouteLoading />;
  }

  if (isError) {
    return <Navigate to={routes.auth.login} />;
  }

  if (data?.status === UserStatus.ACTIVE)
    return <Navigate to={routes.dashboard} />;

  return children;
};
