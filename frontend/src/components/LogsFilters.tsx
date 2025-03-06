import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAlertLog } from "../hooks/useAlertLog";
import { SortBy } from "../enums/general";
import SearchQuery from "./Filters/SearchQuery";
import Sort from "./Filters/Sort";

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  width: 100%;
`;


const LogFilters = () => {
  const { applyFilters, logs } = useAlertLog();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    applyFilters({
      searchQuery: searchQuery.trim() ? searchQuery : undefined,
      sortBy: (sortBy as SortBy) || undefined,
    });
  }, [searchQuery, sortBy, logs]);

  return (
    <FilterContainer>
      <SearchQuery searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sort sortBy={sortBy} setSortBy={setSortBy} />
    </FilterContainer>
  );
};

export default LogFilters;
