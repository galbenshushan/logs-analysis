import { parseLogLine } from "../utils/logParsers";
import {
  LogEntry,
  RequestsPerHour,
  ResourceCount,
  ResponseCodes,
} from "../types/logs";
import { readLogFile } from "./filesService";
import { TrafficThreshold } from "../enums/general";

export const analyzeLogs = (logFilePath: string) => {
  try {
    const logs = readLogFile(logFilePath);
    const requestsPerHour: RequestsPerHour = {};
    const resourceCount: ResourceCount = {};
    const responseCodes: ResponseCodes = {};
    const anomalies: string[] = [];

    logs.forEach((line) => {
      const logEntry: LogEntry | null = parseLogLine(line);
      if (!logEntry) return;

      const hour: string = logEntry.dateTime.slice(0, 13);
      requestsPerHour[hour] = (requestsPerHour[hour] || 0) + 1;
      resourceCount[logEntry.resource] =
        (resourceCount[logEntry.resource] || 0) + 1;
      responseCodes[logEntry.responseCode] =
        (responseCodes[logEntry.responseCode] || 0) + 1;
    });

    for (const [hour, count] of Object.entries(requestsPerHour)) {
      if (count > TrafficThreshold.High) {
        anomalies.push(`High traffic detected at ${hour}: ${count} requests`);
      }
    }

    return { requestsPerHour, resourceCount, responseCodes, anomalies };
  } catch (error) {
    console.error("Error analyzing logs:", error);
    return {
      requestsPerHour: {},
      resourceCount: {},
      responseCodes: {},
      anomalies: [],
    };
  }
};
