import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";

const Reset = ({ setLoginPage }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verified, setVerified] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log(email);

  const handleVerify = async() => {
    //only after verify
    setVerified(true);
  }

  const handleSaveNewPassword = async() => {
    if(newPassword === confirmPassword){
        console.log("password matched");
    }else{
        console.log("not matched");
    }
  }
  return (
    <>
      {!verified ? (
        <>
          <p className="loginTitleContent">Reset Your Password</p>
          <div
            style={{
              display: "flex",
              width: "70%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              type="email"
              className="inputOfLogin"
              label="Enter Your Email..."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <button
              className="loginBackButton"
              onClick={() => setLoginPage(true)}
            >
              Back
            </button>
            <button className="loginSendOtpButton">Send OTP</button>
          </div>
          <hr className="line" />
          <p className="loginTitleContent">Enter the OTP</p>
          <div
            style={{
              display: "flex",
              width: "70%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              type="text"
              className="inputOfLogin"
              label="Enter OTP"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <button className="loginBackButton" onClick={handleVerify}>Verify</button>
          </div>
        </>
      ) : (
        <>
        <p className="loginTitleContent">Reset Password</p>
        <div
            style={{
              display: "flex",
              width: "70%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection:"column"
            }}
          >
            <TextField
              type={toggle ? "text" : "password"}
              className="inputOfLogin"
              label="Enter New Password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
            <TextField
              type={toggle ? "text" : "password"}
              className="inputOfLogin"
              label="Confirm Your Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>
          <div style={{ marginTop: "30px", display: "flex", gap: "20px" }}>
            <button
              className="loginBackButton"
              onClick={() => setLoginPage(true)}
            >
              Back
            </button>
            <button className="loginSendOtpButton" onClick={handleSaveNewPassword}>Reset</button>
          </div>
        </>
      )}
    </>
  );
};

export default Reset;
