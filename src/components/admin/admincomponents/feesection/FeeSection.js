import React, { useState } from "react";
import "./FeeSection.css";
import { useSelector } from "react-redux";
import Table from "../../../../common/table/Table";
import RoleType from "../../../../common/roleType/RoleType";
const FeeSection = () => {
  const { loading } = useSelector((state) => state.admin);
  const [clickedListButton, setClickedListButton] = useState(true);

  const studentList = {
    headers:["Name","Total Installments","Payment Date","Payment Status"],
    rows:[
      ["Binod Joshi", "2 Installments", "4 March 2023", "Not Paid",],
      ["Keshav Joshi", "3 Installments", "23", "1 Installment Paid",],
      ["Binod Joshi", "2 Installments", "23", "Not Paid",],
      ["Keshav Joshi", "3 Installments", "23", "1 Installment Paid",],
      // Add more rows as needed
    ],
  }
  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Fees Section</h1>
      </div>
      <div>
      <RoleType roleType={"All Three"} />
      </div>
    </div>
  );
};

export default FeeSection;
