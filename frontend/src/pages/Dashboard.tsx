import AlertDropdown from '../components/AlertDropdown';
import LogTable from '../components/LogTable';

const Dashboard = () => {
  return (
    <div>
      <h1>Alert Log Dashboard</h1>
      <AlertDropdown />
      <LogTable />
    </div>
  );
};

export default Dashboard;
