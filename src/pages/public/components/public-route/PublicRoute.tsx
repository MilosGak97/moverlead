import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../../routing/hooks/useAuth';

export const PublicRoute = () => {
  const { isLoading, isSuccess } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSuccess) {
    return <Navigate to={'/dashboard'} />;
  }

  return <Outlet />;
};
