import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import TeacherDashboard from "./components/teacher/teacherdashboard/TeacherDashboard";
import StudentDashboard from "./components/student/studentdashboard/StudentDashboard";
import Login from "./components/loginScreen/Login";
function App() {
  let role = "";
  return (
    <Router>
      {role === "Admin" && <AdminDashboard />}
      {role === "Teacher" && <TeacherDashboard />}
      {role === "Student" && <StudentDashboard/>}

      {role === "" && <Routes>
        <Route path="/" element = {<Login/>} />
        </Routes>}
    </Router>
  );
}

export default App;
