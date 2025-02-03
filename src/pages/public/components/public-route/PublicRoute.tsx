import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { routes } from '../../../../router/routes';

export const PublicRoute = () => {
  const { isLoading, isSuccess } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Navigate to={routes.dashboard} />;
  }

  return <Outlet />;
};
