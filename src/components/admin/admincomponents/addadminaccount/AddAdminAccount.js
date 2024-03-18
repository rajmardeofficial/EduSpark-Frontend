import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAdminAccount } from "../../../../store/adminrelated/AdminHandle";
import { Alert, TextField } from "@mui/material";
import RoleType from "../../../../common/roleType/RoleType";

const AddAdminAccount = () => {
  const { loading } = useSelector((state) => state.admin);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmPassword: "",
  });
  const [matched,setMatched] = useState(true); 
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    console.log(name,value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }) )
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(formData.password === formData.confirmPassword){
      try {
        const { confirmPassword, ...formDataWithoutConfirmPassword } = formData;
        dispatch(addAdminAccount(formDataWithoutConfirmPassword))
      } catch (error) {
        console.log(error);
      }
    }else{
      setMatched(false);
      console.log("passwords not matched");
    }
  }

  useEffect(() =>{
    if(matched == false){
      const timeout = setTimeout(() => {
        setMatched(true)
      },2000);
      return () => clearTimeout(timeout);
    }
  },[matched])
  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Add Admin Account</h1>
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
          label="Name of Admin"
          name="name"
          autoComplete="name"
          autoFocus
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          type="email"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phoneNum"
          label="Phone Number"
          name="phoneNum"
          type="Number"
          autoComplete="phoneNum"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="password"
          className="textField"
          onChange={handleOnChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          autoComplete="confirmPassword"
          className="textField"
          onChange={handleOnChange}
        />

        <button className="buttonOfAdd" type="submit">
          Add Admin
        </button>
      </form>
      {
        !matched && <Alert severity="info" className="alertPosition">Password and Confirm password must be same.</Alert>
      }
    </div>
  );
};

export default AddAdminAccount;
