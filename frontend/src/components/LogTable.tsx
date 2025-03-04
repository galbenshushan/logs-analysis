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

const LogTable = () => {
  const { logs } = useAlertLog();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Instance ID</TableCell>
            <TableCell>Current State</TableCell>
            <TableCell>Source IP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((log, index) => (
            <TableRow key={index}>
              <TableCell>{log.timestamp}</TableCell>
              <TableCell>{log.event_name}</TableCell>
              <TableCell>{log.user_identity.userName}</TableCell>
              <TableCell>
                {log.response_elements?.instancesSet?.items.map((item: any) => (
                  <div key={item.instanceId}>{item.instanceId}</div>
                ))}
              </TableCell>
              <TableCell>
                {log.response_elements?.instancesSet?.items.map((item: any) => (
                  <div key={`${item.currentState}_${item.instanceId}`}>
                    {item.currentState || "N/A"}
                  </div>
                ))}
              </TableCell>
              <TableCell>{log.source_ip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LogTable;
