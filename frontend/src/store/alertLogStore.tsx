import React, { createContext, useState } from 'react';
import { AlertLogContextType, Log } from '../types/logs.types';

export const AlertLogContext = createContext<AlertLogContextType | undefined>(undefined);

export const AlertLogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAlertId, setSelectedAlertId] = useState<string>('');
  const [logs, setLogs] = useState<Log[]>([]);

  return (
    <AlertLogContext.Provider value={{ selectedAlertId, setSelectedAlertId, logs, setLogs }}>
      {children}
    </AlertLogContext.Provider>
  );
};
