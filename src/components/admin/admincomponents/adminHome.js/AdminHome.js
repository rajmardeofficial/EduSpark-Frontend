import React from "react";
import "./AdminHome.css";
import RoleType from "../../../../common/roleType/RoleType";
const AdminHome = () => {
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
