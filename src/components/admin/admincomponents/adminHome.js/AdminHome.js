import React from "react";
import "./AdminHome.css";
import RoleType from "../../../../common/roleType/RoleType";
import { useSelector } from "react-redux";
const AdminHome = () => {
  const {loading, currentDataType} = useSelector((state) => state.admin);
  console.log(currentDataType);

  return (
    <>
      <div className="navHeader">
        <h1>Home</h1>
      </div>
      <div style={{marginbuttom:"13px"}}>
      <RoleType roleType={"All Three"} />
      </div>
    </>
  );
};

export default AdminHome;
