import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { routes } from '../../../router/routes';
import { RouteLoading } from '../../../shared/components/route-loading/RouteLoading';

export const PublicRoute = () => {
  const { isLoading, isSuccess } = useAuth();

  if (isLoading) {
    return <RouteLoading />;
  }

  if (isSuccess) {
    return <Navigate to={routes.dashboard} />;
  }

  return <Outlet />;
};
