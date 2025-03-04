import { analyzeLogs } from "../services/analysisLogsService";
import { Request, Response } from "express";
import path from "path";

const logFilePath = path.join(__dirname, "../log.txt");
console.log(logFilePath);

export const getAnalyzedReport = (req: Request, res: Response) => {
  const report = analyzeLogs(logFilePath);
  res.json(report);
};
