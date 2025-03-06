import { SortBy } from "../enums/general";

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
  handleAlertChange: (newValue: string | null) => void;
  filteredLogs: Log[];
  setFilteredLogs: React.Dispatch<React.SetStateAction<Log[]>>;
  applyFilters: (filters: { searchQuery?: string; sortBy?: SortBy }) => void;
}
