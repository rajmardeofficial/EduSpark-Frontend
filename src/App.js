
import {
  BrowserRouter as Router,
  Routes,Route,
} from "react-router-dom";


import Login from "./components/LoginScreen/Login/Login";

function App() {
  let role = "";
  return (
    <Router>
   

      
        {/* {role === "Admin" && <AdminDashboard />}
      {role === "Teacher" && <TeacherDashboard />} */}

      {role == "" && <Routes>
        <Route path="/" element={<Login/>}/>
        {/* <Route path="/LoginBack" element={<LoginBack/>}/>
        <Route path="/Otp" element={<Otp/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/> */}
        </Routes>}
        
    </Router>
  );
}

export default App;
