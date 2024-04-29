import React from "react";
import { MenuItem, TextField } from "@mui/material";

const CustomSelectTextField = ({ label, name, value, onChange, options }) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      label={label}
      required
      name={name}
      autoComplete={name}
      select
      className="textField"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelectTextField;
