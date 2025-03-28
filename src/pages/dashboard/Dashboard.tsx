import { useQuery } from '@tanstack/react-query';
import { PageStateContainer } from '../../components/PageStateContainer';
import { Stats } from '../../components/Stats';
import { QueryKeys } from '../../enums/queryKeys';
import { api } from '../../api/api';
import { DashboardGridList } from './components/GridList';

export const Dashboard = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.PROPERTIES_ANALYTICS],
    queryFn: () => api.properties.propertiesControllerGetDashboard(),
  });

  return (
    <PageStateContainer
      isLoading={isLoading}
      isError={isError}
      onErrorButtonClick={refetch}
    >
      <div className="px-8 py-4">
        <Stats
          lastMonthCount={data?.lastMonthCount || 0}
          thisMonthCount={data?.thisMonthCount || 0}
          todayCount={data?.todayCount || 0}
        />
        <DashboardGridList />
      </div>
    </PageStateContainer>
  );
};
