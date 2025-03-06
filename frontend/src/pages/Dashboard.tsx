import AlertDropdown from "../components/AlertDropdown";
import LogFilters from "../components/LogsFilters";
import LogTable from "../components/LogTable";
import styled from "styled-components";
import { useAlertLog } from "../hooks/useAlertLog";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 16px;
`;

const Dashboard = () => {
  const { logs } = useAlertLog();
  return (
    <DashboardContainer>
      <Title>Alert Log Dashboard</Title>
      <ControlsContainer>
        <AlertDropdown />
        <LogFilters />
      </ControlsContainer>
      {logs.length > 0 && <LogTable />}
    </DashboardContainer>
  );
};

export default Dashboard;
