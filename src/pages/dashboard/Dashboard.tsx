import { useQuery } from '@tanstack/react-query';
import { Stats } from '../../components/Stats';
import { QueryKeys } from '../../enums/queryKeys';
import { api } from '../../api/api';
import { DashboardGridList } from './components/GridList';
import { StateContainer } from '../../components/StateContainer';

export const Dashboard = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.PROPERTIES_ANALYTICS],
    queryFn: () => api.properties.propertiesControllerGetDashboard(),
  });

  return (
    <StateContainer
      isLoading={isLoading}
      isError={isError}
      onErrorButtonClick={refetch}
      isCentered
    >
      <Stats
        lastMonthCount={data?.lastMonthCount || 0}
        thisMonthCount={data?.thisMonthCount || 0}
        todayCount={data?.todayCount || 0}
      />
      <DashboardGridList />
    </StateContainer>
  );
};
