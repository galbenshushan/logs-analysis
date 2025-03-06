import styled from "styled-components";
import { Autocomplete, TextField } from "@mui/material";
import { useAlertLog } from "../hooks/useAlertLog";
import { AlertOptions } from "../enums/alerts";

const StyledAutocomplete = styled(Autocomplete)`
  border-radius: 8px;
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

  .MuiAutocomplete-listbox {
    background-color: #0f1a2b;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .MuiAutocomplete-option {
    background-color: #0f1a2b;
    color: white;

    &:hover {
      background-color: #081123;
      color: white;
    }

    &.Mui-selected {
      background-color: #081123;
      color: white;
    }
  }
`;

const AlertDropdown = () => {
  const { selectedAlertId, handleAlertChange } = useAlertLog();

  return (
    <StyledAutocomplete
      value={selectedAlertId}
      onChange={(_, newValue) => handleAlertChange(newValue as string | null)}
      options={Object.values(AlertOptions)}
      renderInput={(params) => <TextField {...params} label="Select Alert" />}
      disableClearable
      isOptionEqualToValue={(option, value) => option === value}
      ListboxProps={{
        style: {
          backgroundColor: "#0f1a2b",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      }}
    />
  );
};

export default AlertDropdown;
