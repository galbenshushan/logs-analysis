import Dashboard from './pages/Dashboard';
import { AlertLogProvider } from './store/alertLogStore';

const App = () => {
  return (
    <AlertLogProvider>
      <Dashboard />
    </AlertLogProvider>
  );
};

export default App;
