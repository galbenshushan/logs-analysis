import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "styled-components";
import { SortBy } from "../../enums/general";
import { sortOptions } from "../../consts/sortFilters";

const SortSelect = styled(Select)`
  background-color: #0f1a2b;
  border-radius: 8px !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 2px 8px rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.7) !important;
  min-width: 180px;

  .MuiOutlinedInput-root {
    font-size: 15px;
    font-weight: 500;
    color: white;
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

  .MuiInputBase-input:disabled {
    color: rgba(255, 255, 255, 0.5);
  }

  .MuiSelect-icon {
    color: white;
  }

  .MuiSelect-select:focus {
    background-color: #0f1a2b;
  }
`;

interface SortByProps {
  sortBy: string;
  setSortBy: (sortBy: SortBy) => void;
}

const Sort: React.FC<SortByProps> = ({ sortBy, setSortBy }) => {
  return (
    <SortSelect
      value={sortBy}
      onChange={(e: SelectChangeEvent<unknown>) =>
        setSortBy(e.target.value as SortBy)
      }
      displayEmpty
      MenuProps={{
        PaperProps: {
          style: {
            backgroundColor: "#0f1a2b",
            color: "white",
          },
        },
      }}
    >
      {sortOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SortSelect>
  );
};

export default Sort;
