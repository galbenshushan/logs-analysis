import { LogParts } from "../enums/general";
import { LogEntry } from "../types/logs";
import { removeSurroundingQuotes } from "./serializations";

export const parseLogLine = (log: string): LogEntry | null => {
  const parts = log.split(' "');
  const dateTime = removeSurroundingQuotes(parts[LogParts.DateTime]);
  const requestType = removeSurroundingQuotes(parts[LogParts.RequestType]);
  const resource = removeSurroundingQuotes(parts[LogParts.Resource]);
  const responseCode = parseInt(
    removeSurroundingQuotes(parts[LogParts.ResponseCode]),
    10
  );
  const responseSize = removeSurroundingQuotes(parts[LogParts.ResponseSize]);
  const referrerUrl = removeSurroundingQuotes(parts[LogParts.ReferrerUrl]);
  const userAgent = removeSurroundingQuotes(
    parts[LogParts.UserAgent].slice(0, -1)
  );

  return {
    dateTime,
    requestType,
    resource,
    responseCode,
    responseSize,
    referrerUrl,
    userAgent,
  };
};
