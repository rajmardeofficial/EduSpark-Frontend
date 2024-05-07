import React, { useState } from "react";
import Learning from "../../assets/Learning.svg";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Reset from "./component/Reset";
import { loginUser } from "../../store/formrelated/FormHandle";

function Login() { 
  const { loading } = useSelector((state) => state.role);
  const [loginpage, setLoginPage] = useState(true);
  const [formData, setFormData] = useState({
    role: "",
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(loginUser(formData));
    
  };

  return (
    <div className="loginCom">
      <div className="leftPart">
        <img className="learning" src={Learning} alt="Study Login" />
        <hr className="line" />
        <div className="loginleftSideContentDiv">
          <p className="loginleftSideContentP">
            "Anyone who stops learning is old, whether at twenty or eighty.
            Anyone who keeps learning stays young"
          </p>
        </div>
      </div>

      <div className="rightPart">
        {loginpage ? (
          <>
            <p className="loginTitleContent">LOGIN</p>
            <form className="loginForm" onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  justifyItems: "flex-start",
                  width: "100%",
                }}
              >
                <select
                  className="selectLoginAs"
                  name="role"
                  value={formData.role}
                  onChange={onChangeHandler}
                >
                  <option value="">Login as</option>
                  <option value="admin">Admin</option>
                  <option value="jrCollegeTeacher">JrCollegeTeacher</option>
                  <option value="collegeTeacher">CollegeTeacher</option>
                  <option value="schoolTeacher">SchoolTeacher</option>
                  <option value="jrCollegeStudent">JrCollegeStudent</option>
                  <option value="collegeStudent">CollegeStudent</option>
                  <option value="schoolStudent">SchoolStudent</option>
                </select>
              </div>
              <TextField
                type="text"
                className="inputOfLogin"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={onChangeHandler}
              />
              <TextField
                type={toggle ? "text" : "password"}
                className="inputOfLogin"
                label="Password"
                name="password"
                value={formData.password}
                onChange={onChangeHandler}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setToggle(!toggle)}>
                        {toggle ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div className="forgotPassword">
                <button className="link1" onClick={() => setLoginPage(false)}>
                  Forget Password?
                </button>
              </div>
              <button className="loginButton" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </>
        ) : (
          <>
            <Reset setLoginPage= {setLoginPage}/>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
