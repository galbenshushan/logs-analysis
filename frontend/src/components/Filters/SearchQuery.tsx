import { TextField } from "@mui/material";
import { useAlertLog } from "../../hooks/useAlertLog";
import styled from "styled-components";

interface SearchQueryProps {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
}

const StyledTextField = styled(TextField)`
  background-color: #081123;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7) !important;
  width: 100%;

  .MuiOutlinedInput-root {
    font-size: 15px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7) !important;
    border-radius: 8px;
    background-color: #0f1a2b;
    border: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      border-color: rgba(255, 255, 255, 0.5);
    }

    &.Mui-focused {
      border-color: rgba(255, 255, 255, 0.7);
      box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.2);
    }
  }

  .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: 500;
  }

  .MuiSvgIcon-root {
    color: white;
  }
`;

const SearchQuery: React.FC<SearchQueryProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const { logs } = useAlertLog();

  return (
    <StyledTextField
      label="Search Event Name"
      value={!logs.length ? "" : searchQuery}
      onChange={!logs.length ? (e) => setSearchQuery(e.target.value) : () => {}}
    />
  );
};

export default SearchQuery;
