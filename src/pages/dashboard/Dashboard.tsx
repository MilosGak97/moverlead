import { useQuery } from '@tanstack/react-query';
import GridList from '../../components/GridList';
import { PageStateContainer } from '../../components/PageStateContainer';
import { Stats } from '../../components/Stats';
import { QueryKeys } from '../../enums/queryKeys';
import { api } from '../../api/api';

export const Dashboard = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.PROPERTIES_ANALYTICS],
    queryFn: () => api.properties.propertiesControllerGetDashboard(),
  });

  console.log(data);

  return (
    <PageStateContainer isLoading={isLoading} isError={isError}>
      <div className="px-8 py-4">
        <Stats
          lastMonthCount={data?.lastMonthCount || 0}
          thisMonthCount={data?.thisMonthCount || 0}
          todayCount={data?.todayCount || 0}
        />
        <GridList />
      </div>
    </PageStateContainer>
  );
};
