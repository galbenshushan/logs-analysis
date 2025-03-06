import { SortBy } from "../enums/general";

export const sortOptions = [
  { value: "", label: "Sort By" },
  { value: SortBy.TIMESTAMP, label: "Timestamp" },
  { value: SortBy.EVENT_NAME_ASC, label: "Event Name (A-Z)" },
  { value: SortBy.EVENT_NAME_DESC, label: "Event Name (Z-A)" },
];
