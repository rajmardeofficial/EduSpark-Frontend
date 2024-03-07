import React, { useState } from "react";
import { Box, CssBaseline} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../../admin/admindashboard/AdminDashboard.css"
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { SiSpeedtest } from "react-icons/si";
import { PiNotepadBold } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { PiNotePencilBold } from "react-icons/pi";
import TeacherHome from "../teachercomponents/teacherhome/TeacherHome";
import Attendance from "../teachercomponents/attendance/Attendance";
import ScheduleTest from "../teachercomponents/scheduletest/ScheduleTest";
import DrawerOfDashboard from "../../../common/drawer/DrawerOfDashboard";
import AddMarks from "../teachercomponents/addMarks/AddMarks";
import Notice from "../teachercomponents/notice/Notice";
import Progress from "../teachercomponents/progress/Progress";
import AddNotes from "../teachercomponents/addnotes/AddNotes"

const TeacherDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    const menuItems = [
      { to: "/", text: "Home", icon: HomeIcon },
      { to: "/attendance", text: "Attendance", icon: PiStudent },
      { to: "/scheduleTest", text: "Schedule Test", icon: GiTeacher },
      {
        to: "/addMarks",
        text: "Add Marks",
        icon: SiSpeedtest,
      },
      { to: "/notice", text: "Notice", icon: PiNotepadBold },
      { to: "/progress", text: "Progress", icon: GiProgression },
      { to: "/addNotes", text: "Add Notes", icon: PiNotePencilBold },
    ];
  return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />

    <DrawerOfDashboard open={open} menuItems={menuItems} location={location} />

    <Box component="main" sx={styles.boxStyled}>
      <Routes>
        <Route path="/" element={<TeacherHome />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/scheduleTest" element={<ScheduleTest />} />
        <Route path="/addMarks" element={<AddMarks />} /> 
        <Route  path="/notice" element={<Notice/>} />
        <Route path="/progress" element={<Progress/>} />
        <Route path="/addNotes" element={<AddNotes/>} />                          
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  </Box>
  )
}

export default TeacherDashboard

const styles = {
    boxStyled: {
      backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    toolBarStyled: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      px: [1],
    },
    drawerStyled: {
      display: "flex",
      width: "250px",
    },
    hideDrawer: {
      display: "flex",
      "@media (max-width: 600px)": {
        display: "none",
      },
    },
  };
  