import GridList from '../../components/GridList';
import Stats from '../../components/Stats';

const Dashboard = () => {
  return (
    <>
      <div className="px-8 py-4">
        <Stats />
        <GridList />
      </div>
    </>
  );
};

export default Dashboard;
