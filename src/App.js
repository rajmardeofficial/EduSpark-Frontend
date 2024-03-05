import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AdminDashboard from "./components/admin/admindashboard/AdminDashboard"
import Login from "./components/LoginScreen/Login/Login";

function App() {
  let role = "Admin";
  return (
    <Router>
      {role === "Admin" && <AdminDashboard />}

      {role !== "Admin" && <Routes>
        <Router path="/" element={<Login/>}/>
        
        </Routes>}
    </Router>
  );
}

export default App;
