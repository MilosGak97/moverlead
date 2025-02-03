import Stats from './components/Stats.tsx';
import GridList from './components/GridList.tsx';

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
