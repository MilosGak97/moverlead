import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { routes } from '../../../../router/routes';
import { PuffLoader } from 'react-spinners';

export const PublicRoute = () => {
  const { isLoading, isSuccess } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-screen grid place-content-center ">
        <PuffLoader color="#4379F2" />
      </div>
    );
  }

  if (isSuccess) {
    return <Navigate to={routes.dashboard} />;
  }

  return <Outlet />;
};
