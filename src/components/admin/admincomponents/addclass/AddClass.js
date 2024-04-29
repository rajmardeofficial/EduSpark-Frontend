import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem, TextField } from "@mui/material";
import { addClass } from "../../../../store/adminrelated/AdminHandle";
import RoleType from "../../../../common/roleType/RoleType";

const AddClass = () => {
  const { loading } = useSelector((state) => state.admin);
  const [formData, setFormData] = useState({
    class: "",
    branch: "",
    name: "",
    education:"",
    fees:"",
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // You can send the data to an API or perform further actions
    dispatch(addClass(formData));
  };
  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Add Class</h1>
      </div>
      <div>
      <RoleType roleType={"All Three"} />
      </div>
      <form className="componentGrid" onSubmit={handleFormSubmit}>
      <TextField
          margin="normal"
          fullWidth
          id="class"
          label="Class"
          name="class"
          autoComplete="class"
          select
          className="textField"
          value={formData.class}
          onChange={handleOnChange}
        >
          <MenuItem value="class1">class 1</MenuItem>
          <MenuItem value="class2">class 2</MenuItem>
          <MenuItem value="class3">class 3</MenuItem>
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="branch"
          label="Branch (if applicable)"
          name="branch"
          autoComplete="branch"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name of Student"
          name="name"
          autoComplete="name"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="education"
          label="School/Jr clg/UG ?"
          required
          name="education"
          autoComplete="education"
          select
          className="textField"
          value={formData.education}
          onChange={handleOnChange}
        >
          <MenuItem value="School">School</MenuItem>
          <MenuItem value="Jr clg">Jr clg</MenuItem>
          <MenuItem value="UG">UG</MenuItem>
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          id="fees"
          label="Fees (if applicable)"
          required
          name="fees"
          autoComplete="fees"
          type="Number"
          className="textField"
          onChange={handleOnChange}
        />
        <button className="buttonOfAdd" type="submit">
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
