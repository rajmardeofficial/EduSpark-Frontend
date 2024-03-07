import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import TeacherDashboard from "./components/teacher/teacherdashboard/TeacherDashboard";

function App() {
  let role = "Admin";
  return (
    <Router>
      {role === "Admin" && <AdminDashboard />}
      {role === "Teacher" && <TeacherDashboard />}

      {role == "" && <Routes></Routes>}
    </Router>
  );
}

export default App;
