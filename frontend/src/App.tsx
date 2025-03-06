import Dashboard from './pages/Dashboard';
import { AlertLogProvider } from './store/alertLogStore';
import './App.css';
import Nav from './components/Layout/Nav';

const App = () => {
  return (
    <AlertLogProvider>
      <Nav/>
      <Dashboard />
    </AlertLogProvider>
  );
};

export default App;
