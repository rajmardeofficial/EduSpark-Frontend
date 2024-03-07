import { MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { docReqList } from '../../../../store/adminrelated/AdminHandle';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DocReqList = () => {
  const { loading } = useSelector((state) => state.admin);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    documentType: "",
    date:"",
    filter:"",
  }); // there are more fileds
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  
  const handleOnChangeForDate = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      date: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // You can send the data to an API or perform further actions
    dispatch(docReqList(formData));
  };

  return (
    <div className="studentComponent">
    <div className="navHeader">
      <h1>Document Req List </h1>
    </div>
    <form className="componentGrid" onSubmit={handleFormSubmit}>
    <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name of Student"
          name="name"
          autoComplete="name"
          autoFocus
          className="textField"
          onChange={handleOnChange}
        />
    <TextField
        margin="normal"
        fullWidth
        id="status"
        label="Status"
        name="status"
        autoComplete="status"
        select
        className="textField"
        value={formData.status}
        onChange={handleOnChange}
      >
        <MenuItem value="status1">status 1</MenuItem>
        <MenuItem value="class2">class 2</MenuItem>
        <MenuItem value="class3">class 3</MenuItem>
      </TextField>
      <TextField
        margin="normal"
        required
        fullWidth
        id="documentType"
        label="Document Type"
        name="documentType"
        autoComplete="documentType"
        className="textField"
        onChange={handleOnChange}
      />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker style={{color:"black !important",border:"19px solid black"}}
            value={formData.date}
            onChange={(value) => handleOnChangeForDate(value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: '1px solid black !important',
                  opacity:"0.3"
                },
              },
            }}
            slotProps={{
              textField: {
                variant: "outlined",
                margin: "normal",
                fullWidth: true,
                id: "birth",
                label: "Request Date",
                name: "birth",
                autoComplete: "birth",
                className: "textField",
                InputProps: {
                  style: {
                    // border: "2px solid black", // Set your border styles here
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
      <TextField
        margin="normal"
        fullWidth
        id="filter"
        label="Filters"
        required
        name="filter"
        autoComplete="filter"
        select
        className="textField"
        value={formData.filter}
        onChange={handleOnChange}
      >
        <MenuItem value="filter1">Filter 1</MenuItem>
        <MenuItem value="Jr clg">Jr clg</MenuItem>
        <MenuItem value="UG">UG</MenuItem>
      </TextField>
      <button className="buttonOfAdd" type="submit">
        Doc List
      </button>
    </form>
  </div>
  )
}

export default DocReqList
