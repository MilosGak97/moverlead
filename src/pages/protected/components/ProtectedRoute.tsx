import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import { useAuth } from '../../../hooks/useAuth';
import { routes } from '../../../router/routes';
import { UserStatus } from '../../../enums/userStatus';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data, isLoading, isError } = useAuth();

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

  if (data?.status === UserStatus.NOT_VERIFIED)
    return <Navigate to={routes.verify.notVerifiedEmail} />;

  if (data?.status === UserStatus.FORGOT_PASSWORD)
    return <Navigate to={routes.verify.setPassword} />;

  return children;
};
