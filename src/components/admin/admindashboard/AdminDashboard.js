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
import "./AdminDashboard.css";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5"
import { TbFileTypeDoc } from "react-icons/tb";
import { TbBinaryTree2 } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiNotepadBold } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ListIcon from '@mui/icons-material/List';
import AdminHome from "../admincomponents/adminHome.js/AdminHome";
import AddStudent from "../admincomponents/addstudent/AddStudent";
import AddTeacher from "../admincomponents/addteacher/AddTeacher";
import AddLiberian from "../admincomponents/addliberian/AddLiberian";
import AddDocFacilitates from "../admincomponents/adddocfacilitates/AddDocFacilitates";
import AddClass from "../admincomponents/addclass/AddClass";
import FeeSection from "../admincomponents/feesection/FeeSection";
import Notice from "../admincomponents/notice/Notice";
import AddAdminAccount from "../admincomponents/addadminaccount/AddAdminAccount";
import DocReqList from "../admincomponents/docreqlist/DocReqList";
import DrawerOfDashboard from "../../drawer/DrawerOfDashboard";


const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { to: "/", text: "Home", icon: HomeIcon },
    { to: "/addStudent", text: "Add Student", icon: PiStudent },
    { to: "/addTeacher", text: "Add Teacher", icon: GiTeacher },
    { to: "/addliberian", text: "Add Liberian", icon: IoLibraryOutline },
    {
      to: "/addDocFacilitates",
      text: "Add Doc Facilitates",
      icon: TbFileTypeDoc,
    },
    { to: "/addClass", text: "Add Class", icon: TbBinaryTree2 },
    { to: "/feesSection", text: "Fees Section", icon: FaMoneyBillTransfer },
    { to: "/notice", text: "Notice", icon: PiNotepadBold },
    { to: "/addAdminAccount", text: "Add Admin Account", icon: MdOutlineAdminPanelSettings },
    { to: "/docReqList", text: "Document Req List", icon: ListIcon },
  ];
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <DrawerOfDashboard open={open} menuItems={menuItems} location={location} />

        <Box component="main" sx={styles.boxStyled}>
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/addTeacher" element={<AddTeacher />} />
            <Route path="/addLiberian" element={<AddLiberian />} /> 
            <Route path="/addDocFacilitates" element={<AddDocFacilitates/>} />  
            <Route path="/addClass" element={<AddClass/>} /> 
            <Route path="/feesSection" element={<FeeSection/>} />
            <Route  path="/notice" element={<Notice/>} />
            <Route path="/addAdminAccount" element={<AddAdminAccount/>} />
            <Route path="/docReqList" element={<DocReqList/>} />                          
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default AdminDashboard;

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
