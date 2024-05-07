import React, { useEffect, useState } from "react";
import { Box, CssBaseline} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../../admin/admindashboard/AdminDashboard.css";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import ListIcon from "@mui/icons-material/List";
import { PiNotepadBold } from "react-icons/pi";
import { GiProgression } from "react-icons/gi";
import { PiNotePencilBold } from "react-icons/pi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import DrawerOfDashboard from "../../../common/drawer/DrawerOfDashboard";
import StudentHome from "../studentcomponents/studenthome/StudentHome";
import Attendance from "../studentcomponents/attendance/Attendance";
import MyTest from "../studentcomponents/mytest/MyTest";
import AccessNotes from "../studentcomponents/accessnotes/AccessNotes";
import RequestDocument from "../studentcomponents/requestdocument/RequestDocument";
import Notice from "../studentcomponents/notice/Notice";
import TrackProgress from "../studentcomponents/trackprogress/TrackProgress";
import Fees from "../studentcomponents/fees/Fees";
import ParticularSubjectNotes from "../studentcomponents/accessnotes/components/ParticularSubjectNotes";
import { useDispatch, useSelector } from "react-redux";
import { GetAllSubjectOfStudent } from "../../../store/studentrelated/StudentHandle";

const StudentDashboard = () => {
    const {currentUser} = useSelector((state) => state.role);
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    const toggleDrawer = () => {
      setOpen(!open);
    };
    
    
    const menuItems = [
        { to: "/", text: "Home", icon: HomeIcon },
        { to: "/attendance", text: "Attendance", icon: PiStudent },
        { to: "/myTest", text: "My Test", icon: GiTeacher },
        {
          to: "/requestDocument",
          text: "Request Document",
          icon: ListIcon,
        },
        { to: "/notice", text: "Notice", icon: PiNotepadBold },
        { to: "/trackProgress", text: "Track Progress", icon: GiProgression },
        { to: "/accessNotes", text: "Access Notes", icon: PiNotePencilBold },
        { to: "/fees", text: "Fees", icon: FaMoneyBillTransfer },
      ];
      
      useEffect(() => {
        dispatch(GetAllSubjectOfStudent(currentUser));
      },[])
  return (
    <Box sx={{ display: "flex" }}>
    <CssBaseline />

    <DrawerOfDashboard open={open} menuItems={menuItems} location={location} />

    <Box component="main" sx={styles.boxStyled}>
      <Routes>
        <Route path="/" element={<StudentHome />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/myTest" element={<MyTest />} />
        <Route path="/requestDocument" element={<RequestDocument />} /> 
        <Route  path="/notice" element={<Notice/>} />
        <Route path="/trackProgress" element={<TrackProgress/>} />
        <Route path="/accessNotes" element={<AccessNotes/>} />
        <Route path="/particularSubjectNotes/:subject" element = {<ParticularSubjectNotes/>} />                          
        <Route path="/fees" element={<Fees/>} />                          
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  </Box>
  )
}

export default StudentDashboard;

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
  