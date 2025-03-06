import { SortBy } from "../enums/general";
import { Log } from "../types/logs.types";

export const filterBySearchQuery = (logs: Log[], searchQuery: string): Log[] =>
  searchQuery
    ? logs.filter((log) =>
        log.event_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : logs;

export const handleSort = (logs: Log[], sortBy: SortBy) => {
  switch (sortBy) {
    case SortBy.TIMESTAMP:
      logs.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      break;

    case SortBy.EVENT_NAME_ASC:
      logs.sort((a, b) => a.event_name.localeCompare(b.event_name));
      break;

    case SortBy.EVENT_NAME_DESC:
      logs.sort((a, b) => b.event_name.localeCompare(a.event_name));
      break;

    default:
      break;
  }
};
