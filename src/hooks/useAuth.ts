import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../enums/queryKeys';
import { api } from '../api/api';

export const useAuth = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: [QueryKeys.WHO_AM_I],
    queryFn: () => api.auth.authControllerGetProfile(),
    retry: false,
  });

  return { data, isLoading, isError, isSuccess };
};
