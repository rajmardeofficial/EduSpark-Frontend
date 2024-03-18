import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentDataType } from "../../store/adminrelated/AdminHandle";

const RoleType = ({ roleType }) => {
  const dispatch = useDispatch();
  let initalString;
  if (
    roleType === "School" ||
    roleType === "School and Jr College" ||
    roleType === "School and College" ||
    roleType === "All Three"
  ) {
    initalString = "School";
  } else if (
    roleType === "Jr College" ||
    roleType === "School and Jr College" ||
    roleType === "Jr College and College" ||
    roleType === "All Three"
  ) {
    initalString = "Jr College";
  } else {
    initalString = "College";
  }
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let stringValue;
  const handleTabClick = (role) => {
    stringValue = role;
    console.log(stringValue);
    dispatch(setCurrentDataType(stringValue))
  };

  let tabComponents = [];

  // Conditional rendering of Tab components
  if (
    roleType === "School" ||
    roleType === "School and Jr College" ||
    roleType === "School and College" ||
    roleType === "All Three"
  ) {
    tabComponents.push(
      <Tab
        key="school"
        label="School"
        onClick={() => handleTabClick("School")}
      />
    );
  }
  if (
    roleType === "Jr College" ||
    roleType === "School and Jr College" ||
    roleType === "Jr College and College" ||
    roleType === "All Three"
  ) {
    tabComponents.push(
      <Tab
        key="jrCollege"
        label="Jr College"
        onClick={() => handleTabClick("Jr College")}
      />
    );
  }
  if (
    roleType === "College" ||
    roleType === "School and College" ||
    roleType === "Jr College and College" ||
    roleType === "All Three"
  ) {
    tabComponents.push(
      <Tab
        key="college"
        label="College"
        onClick={() => handleTabClick("College")}
      />
    );
  }

  useEffect(() => {
    
    dispatch(setCurrentDataType(initalString))
  },[]);

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        {tabComponents}
      </Tabs>
    </Box>
  );
};

export default RoleType;
