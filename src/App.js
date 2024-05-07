import "./App.css";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import TeacherDashboard from "./components/teacher/teacherdashboard/TeacherDashboard";
import StudentDashboard from "./components/student/studentdashboard/StudentDashboard";
import Login from "./components/loginScreen/Login";
import { useSelector } from "react-redux";
function App() {
  const {currentUser} = useSelector((state) => state.role);
  let role = currentUser?.role;
  console.log(role);
  return (
    <Router>
      {role === "Admin" && <AdminDashboard />}
      {role === "Teacher" && <TeacherDashboard />}
      {role === "Student" && <StudentDashboard/>}

      {(role === "" || role === undefined) && <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>}
    </Router>
  );
}

export default App;
