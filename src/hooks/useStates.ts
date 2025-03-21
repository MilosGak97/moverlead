import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { QueryKeys } from '../enums/queryKeys';

export const useStates = () => {
  const {
    data: states,
    isLoading: isLoadingStates,
    isError: isErrorStates,
    refetch: refetchStates,
  } = useQuery({
    queryKey: [QueryKeys.STATES],
    queryFn: () => api.properties.propertiesControllerListStates(),
  });

  return { states, isLoadingStates, isErrorStates, refetchStates };
};
