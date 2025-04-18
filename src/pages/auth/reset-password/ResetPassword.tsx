import { useQuery } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { QueryKeys } from '../../../enums/queryKeys';
import { api } from '../../../api/api';
import { useSuccessGetData } from '../../../hooks/useSuccessGetData';
import { routes } from '../../../router/routes';
import { StateContainer } from '../../../components/StateContainer';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token') || '';

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.VERIFY_EMAIL, token],
    queryFn: () => api.auth.authControllerForgotPasswordValidation({ token }),
    enabled: !!token,
  });

  useSuccessGetData({
    data: data,
    callback: () => navigate(routes.dashboard),
  });

  return (
    <div className="h-screen w-screen grid place-content-center">
      <StateContainer
        isLoading={isLoading}
        isError={isError}
        onErrorButtonClick={refetch}
      />
    </div>
  );
};
