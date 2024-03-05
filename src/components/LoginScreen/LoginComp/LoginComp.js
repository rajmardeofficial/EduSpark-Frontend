import { useState } from "react";
import "./LoginComp.css";

const LoginComp = () => {
  let[flag,SetFlag]=useState(true)
   
  const handleChange=()=>{
    SetFlag(!flag)
  }
  return (
    <div className="enter-password-frame">
        <div className="forgot-password-text">
          <h1 className="login" style={{justifyContent:"center"}}>Login</h1>
        </div>
    <form className="group-input">
      
      <input
        className="group-input-child"
        placeholder="Enter your Mail... "
        type="text"
      />
      <div className="rectangle-parent">
        <div className="frame-child" />
        <input
        
          className="enter-password"
          placeholder="Enter Password"
          type={flag ? "password" : "text"}
        />
        <img style={{cursor:"pointer"}}onClick={handleChange} className="mdihide-icon"  alt="" src="/mdihide.svg"  />
      </div>
      <div className="forgot-password">Forgot Password?</div>
      <div className="log-in-text">
        <button className="rectangle-group">
          <div className="frame-item" />
          <div className="log-in">Log in</div>
        </button>
      </div>
    </form>
    </div>
  );
};

export default LoginComp;
