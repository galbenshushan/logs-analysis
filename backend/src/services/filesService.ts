import fs from "fs";

export const readLogFile = (logFilePath: string): string[] => {
  console.log(logFilePath);
  
  if (!fs.existsSync(logFilePath)) {
    console.error("Log file not found!");
    return [];
  }
  return fs.readFileSync(logFilePath, "utf-8").split("\n").filter(Boolean);
};
