export interface Log {
  timestamp: string;
  event_name: string;
  user_identity: {
    type: string;
    userName: string;
  };
  response_elements: any;
  source_ip: string;
}

export interface AlertLogContextType {
  selectedAlertId: string;
  setSelectedAlertId: React.Dispatch<React.SetStateAction<string>>;
  logs: Log[];
  setLogs: React.Dispatch<React.SetStateAction<Log[]>>;
  handleAlertChange: (_: any, newValue: string | null) => void;
}
