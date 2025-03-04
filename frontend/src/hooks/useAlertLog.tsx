import { useContext } from "react";
import { AlertLogContext } from "../store/alertLogStore";

export const useAlertLog = () => {
  const context = useContext(AlertLogContext);
  if (!context) {
    throw new Error('useAlertLog must be used within an AlertLogProvider');
  }
  return context;
};