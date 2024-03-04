import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import AdminDashboard from "./components/admin/admindashboard/AdminDashboard"

function App() {
  let role = "Admin";
  return (
    <Router>
      {role === "Admin" && <AdminDashboard />}

      {role !== "Admin" && <Routes>
        
        </Routes>}
    </Router>
  );
}

export default App;
