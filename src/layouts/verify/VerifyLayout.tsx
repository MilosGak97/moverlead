import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Outlet, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import { routes } from '../../router/routes';
import { Button } from '../../components/Button';

export const VerifyLayout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: () => api.auth.authControllerLogout(),
    onSuccess: () => {
      queryClient.invalidateQueries();
      queryClient.removeQueries();
      navigate(routes.auth.login);
    },
  });

  return (
    <div className="h-screen w-screen overflow-hidden grid place-items-center bg-slate-100">
      <div className="max-w-2xl  w-full flex flex-col items-end gap-4">
        <div>
          <Button color="noneDark" onClick={mutate} isLoading={isPending}>
            Logout
          </Button>
        </div>
        <div className="w-full p-4 bg-white rounded-3xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
