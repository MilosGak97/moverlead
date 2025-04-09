import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import { routes } from '../../../../router/routes';
import { PuffLoader } from 'react-spinners';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoading, isError } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-screen grid place-content-center ">
        <PuffLoader color="#4379F2" />
      </div>
    );
  }

  if (isError) {
    return <Navigate to={routes.auth.login} />;
  }

  return children;
};
