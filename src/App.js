import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import TeacherDashboard from "./components/teacher/teacherdashboard/TeacherDashboard";
import StudentDashboard from "./components/student/studentdashboard/StudentDashboard";

function App() {
  let role = "Student";
  return (
    <Router>
      {role === "Admin" && <AdminDashboard />}
      {role === "Teacher" && <TeacherDashboard />}
      {role === "Student" && <StudentDashboard/>}

      {role === "" && <Routes></Routes>}
    </Router>
  );
}

export default App;
