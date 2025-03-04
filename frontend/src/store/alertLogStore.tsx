import React, { createContext, useState } from "react";
import { AlertLogContextType, Log } from "../types/logs.types";
import { fetchLogs } from "../services/logService";

export const AlertLogContext = createContext<AlertLogContextType | undefined>(
  undefined
);

export const AlertLogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedAlertId, setSelectedAlertId] = useState<string>("");
  const [logs, setLogs] = useState<Log[]>([]);

  const handleAlertChange = async (_: any, newValue: string | null) => {
    setSelectedAlertId(newValue || "");
    if (newValue) {
      const logs = await fetchLogs(newValue);
      setLogs(logs);
    }
  };

  return (
    <AlertLogContext.Provider
      value={{
        selectedAlertId,
        setSelectedAlertId,
        logs,
        setLogs,
        handleAlertChange,
      }}
    >
      {children}
    </AlertLogContext.Provider>
  );
};
