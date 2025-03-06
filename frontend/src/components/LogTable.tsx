import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useAlertLog } from "../hooks/useAlertLog";

const StyledTableContainer = styled(TableContainer)`
  background-color: #081123 !important; /* Slightly lighter than #010a19 */
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.05);
`;

const StyledTable = styled(Table)`
  color: white;
`;

const StyledTableHead = styled(TableHead)`
  background-color: #0f1a2b;
  & th {
    font-weight: 600;
    font-size: 15px;
    color: white;
    padding: 12px 16px;
  }
`;

const StyledTableRow = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: rgba(255, 255, 255, 0.05); /* Subtle row highlight */
  }
`;

const StyledTableCell = styled(TableCell)`
  color: white !important;
  font-size: 14px;
  padding: 12px 16px;
  font-weight: 500;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogTable = () => {
  const { filteredLogs } = useAlertLog();

  return (
    <StyledTableContainer as={Paper}>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>Timestamp</StyledTableCell>
            <StyledTableCell>Event Name</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Instance ID</StyledTableCell>
            <StyledTableCell>Current State</StyledTableCell>
            <StyledTableCell>Source IP</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {filteredLogs.map((log, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{log.timestamp}</StyledTableCell>
              <StyledTableCell>{log.event_name}</StyledTableCell>
              <StyledTableCell>{log.user_identity.userName}</StyledTableCell>
              <StyledTableCell>
                {log.response_elements?.instancesSet?.items.map((item: any) => (
                  <div key={item.instanceId}>{item.instanceId}</div>
                ))}
              </StyledTableCell>
              <StyledTableCell>
                {log.response_elements?.instancesSet?.items.map((item: any) => (
                  <div key={`${item.currentState}_${item.instanceId}`}>
                    {item.currentState || "N/A"}
                  </div>
                ))}
              </StyledTableCell>
              <StyledTableCell>{log.source_ip}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default LogTable;
