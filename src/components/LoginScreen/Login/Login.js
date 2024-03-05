import LearningBro from "../LearningBro/LearningBro";
import LoginComp from "../LoginComp/LoginComp";


import "./Login.css";

const Login = () => {
  return (
    <div className="admin-login">
      <LearningBro/>
      {/* <div className="enter-password-frame">
        <div className="forgot-password-text">
          <h1 className="login">Login</h1>
        </div> */}
        {/* <FrameComponent />
        <GroupInput/> */}
        {/* <ResetPasswordLabel/> */}
        {/* <FrameComponent1/>  */}
        <LoginComp/>
        
      {/* </div> */}
    </div>
  );
};

export default Login;
