import React from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CustomDatePicker = ({ name, value, onChange, label }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        style={{ color: "black !important", border: "19px solid black" }}
        value={value}
        onChange={(value) => onChange(value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "1px solid black !important",
              opacity: "0.3",
            },
          },
        }}
        slotProps={{
          textField: {
            variant: "outlined",
            label: label,
            margin: "normal",
            fullWidth: true,
            id: name,
            name: name,
            autoComplete: name,
            className: "textField",
            InputProps: {
              style: {
                color: "black", // Set text color
              },
            },
            InputLabelProps: {
              style: {
                color: "black", // Set label color
              },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
