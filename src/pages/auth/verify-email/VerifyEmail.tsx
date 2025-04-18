import { useQuery } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { api } from '../../../api/api';
import { Dialog } from '../../../components/Dialog';
import { DataStatus } from '../../../components/DataStatus';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { routes } from '../../../router/routes';
import { QueryKeys } from '../../../enums/queryKeys';
import { StateContainer } from '../../../components/StateContainer';

export const VerifyEmail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get('token') || '';

  const { isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.VERIFY_EMAIL, token],
    queryFn: () => api.auth.authControllerVerifyEmail({ token }),
    enabled: !!token,
  });

  return (
    <div className="h-screen w-screen grid place-content-center">
      <StateContainer
        isLoading={isLoading}
        isError={isError}
        onErrorButtonClick={refetch}
      >
        <Dialog isDialogOpen={true}>
          <DataStatus
            icon={<CheckBadgeIcon className="w-16 text-primary" />}
            title="Email Verified!"
            description={
              'Your email has been successfully verified. You can now log in to your account.'
            }
            buttonText="Go to Login"
            onButtonClick={() => navigate(routes.auth.login)}
          />
        </Dialog>
      </StateContainer>
    </div>
  );
};
