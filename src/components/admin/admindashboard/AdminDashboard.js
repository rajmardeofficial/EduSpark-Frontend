import React, { useState } from "react";
import { Box, CssBaseline, Toolbar, List } from "@mui/material";
import {
  styled,
  Drawer as MuiDrawer,
  AppBar as MuiAppBar,
} from "@mui/material";

import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./AdminDashboard.css";
import AddTeacher from "../addteacher/AddTeacher";
import AdminHome from "../adminHome.js/AdminHome";
import { PiStudent } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoLibraryOutline } from "react-icons/io5"
import { TbFileTypeDoc } from "react-icons/tb";
import { TbBinaryTree2 } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiNotepadBold } from "react-icons/pi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import ListIcon from '@mui/icons-material/List';
import AddStudent from "../addstudent/AddStudent";


const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));
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
        <Drawer
          variant="permanent"
          open={open}
          sx={open ? styles.drawerStyled : styles.hideDrawer}
        >
          <div style={{ width: "235px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
              }}
            >
              <div className="rectangleInClassDashboard"></div>
            </div>
            <Divider />
            <div className="navList">
              <List component="nav">
                {menuItems.map((item, index) => (
                  <ListItemButton key={index} component={Link} to={item.to}>
                    <div
                      className={
                        location.pathname === item.to
                          ? "linkInnerPart active"
                          : "linkInnerPart"
                      }
                    >
                      <div
                        className="present"
                        style={{
                          background:
                            location.pathname === item.to ? "#2d60ff" : "none",
                        }}
                      ></div>
                      <ListItemIcon className="iconPart">
                        {React.createElement(item.icon, {
                          style: {
                            fontWeight: "bolder",
                            fontSize: "23px",
                            color:
                              location.pathname === item.to ? "#2d60ff" : "inherit",
                          },
                        })}
                      </ListItemIcon>
                      <ListItemText
                        className="textAlignInLink"
                        primary={item.text}
                      />
                    </div>
                  </ListItemButton>
                ))}
              </List>
            </div>
          </div>
        </Drawer>

        <Box component="main" sx={styles.boxStyled}>
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/addTeacher" element={<AddTeacher />} />

            {/* <Route path="*" element={<Navigate to="/adminhome" />} /> */}
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
