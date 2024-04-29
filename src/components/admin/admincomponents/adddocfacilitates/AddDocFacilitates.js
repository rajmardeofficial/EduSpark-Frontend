import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocFacilitates } from "../../../../store/adminrelated/AdminHandle";
import { MenuItem, TextField } from "@mui/material";
import RoleType from "../../../../common/roleType/RoleType";

const AddDocFacilitates = () => {
  const { loading } = useSelector((state) => state.admin);
  const [formData, setFormData] = useState({
    name: "",
    fees: "",
    classbranch: "",
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
    dispatch(addDocFacilitates(formData));
  };
  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Add Doc Facilitates</h1>
      </div>
      <div>
      <RoleType roleType={"All Three"} />
      </div>
      <form className="componentGrid" onSubmit={handleFormSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name of Document"
          name="name"
          autoComplete="name"
          autoFocus
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="fees"
          label="Document fees (if applicable)"
          name="fees"
          autoComplete="fees"
          type="Number"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="classbranch"
          label="Applicable for (Class/Branch)"
          name="classbranch"
          autoComplete="classbranch"
          select
          className="textField"
          value={formData.classbranch}
          onChange={handleOnChange}
        >
          <MenuItem value="class1">class 1 branch A</MenuItem>
          <MenuItem value="class2">A</MenuItem>
          <MenuItem value="class3">B</MenuItem>
        </TextField>
        <div>i have to work here-- logic not clear </div>
        <button className="buttonOfAdd" type="submit">
          Add DOC Facilitates{" "}
        </button>
      </form>
      
    </div>
  );
};

export default AddDocFacilitates;
