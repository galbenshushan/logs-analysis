import React, { createContext, useState } from "react";
import { AlertLogContextType, Log } from "../types/logs.types";
import { fetchLogs } from "../services/logService";
import { SortBy } from "../enums/general";
import { filterBySearchQuery, handleSort } from "../utils/searchFilters";

export const AlertLogContext = createContext<AlertLogContextType | undefined>(
  undefined
);

export const AlertLogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedAlertId, setSelectedAlertId] = useState<string>("");
  const [logs, setLogs] = useState<Log[]>([]);
  const [filteredLogs, setFilteredLogs] = useState<Log[]>([]);

  const handleAlertChange = async (newValue: string | null) => {
    setSelectedAlertId(newValue || "");
    if (newValue) {
      const logs = await fetchLogs(newValue);
      setLogs(logs);
      setFilteredLogs(logs);
    }
  };

  const applyFilters = (filters: { searchQuery?: string; sortBy?: SortBy }) => {
    let updatedLogs = [...logs];
    updatedLogs = filterBySearchQuery(updatedLogs, filters.searchQuery || "");
    handleSort(updatedLogs, filters.sortBy || SortBy.TIMESTAMP);
    setFilteredLogs(updatedLogs);
  };

  return (
    <AlertLogContext.Provider
      value={{
        selectedAlertId,
        setSelectedAlertId,
        logs,
        setLogs,
        filteredLogs,
        setFilteredLogs,
        handleAlertChange,
        applyFilters,
      }}
    >
      {children}
    </AlertLogContext.Provider>
  );
};
