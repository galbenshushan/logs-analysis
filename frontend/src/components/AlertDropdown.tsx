import { Autocomplete, TextField } from "@mui/material";
import { useAlertLog } from "../hooks/useAlertLog";
import { AlertOptions } from "../enums/alerts";

const AlertDropdown = () => {
  const { selectedAlertId, handleAlertChange } = useAlertLog();
  return (
    <Autocomplete
      value={selectedAlertId}
      onChange={handleAlertChange}
      options={Object.values(AlertOptions)}
      renderInput={(params) => <TextField {...params} label="Select Alert" />}
      disableClearable
    />
  );
};

export default AlertDropdown;
