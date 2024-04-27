import React, { useState } from "react";
import "./FeeSection.css";
import { useSelector } from "react-redux";
import Table from "../../../../common/table/Table";
import RoleType from "../../../../common/roleType/RoleType";
import PieChart from "../../../../utils/pieCharts.js/piechart";

const FeeSection = () => {
  const { loading } = useSelector((state) => state.admin);
  const [clickedListButton, setClickedListButton] = useState(true);

  const studentList = {
    headers: ["Name", "Total Installments", "Payment Date", "Payment Status"],
    rows: [
      ["Binod Joshi", "2 Installments", "4 March 2023", "Not Paid"],
      ["Keshav Joshi", "3 Installments", "23", "1 Installment Paid"],
      ["Honey Singh", "3 Installments", "23", "Paid"],
      ["Binod Joshi", "2 Installments", "23", "Not Paid"],
      ["Keshav Joshi", "3 Installments", "23", "1 Installment Paid"],
      // Add more rows as needed
    ],
  };

  const series = [64.7, 23.5, 11.8];
  const colors = ["#F15B46", "#232531", "#6e8192"];
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["This Month’s Fees (Regular)", "Late Fees", "Not Paid Yet"],
    colors: colors, // Specify colors for data labels
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="studentComponent">
      <div className="navHeader">
        <h1>Fees Section</h1>
      </div>
      <div>
        <RoleType roleType={"All Three"} />
      </div>
      <div style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
        <div
          className={
            clickedListButton
              ? "feeSectionButton"
              : "feeSectionButton feeSectionButtonInsight"
          }
        >
          <button
            className={
              clickedListButton
                ? "styleOfSelectedButton"
                : "styleOfUnselectedButton"
            }
            onClick={() => setClickedListButton(true)}
          >
            Student List
          </button>
          <button
            className={
              clickedListButton
                ? "styleOfUnselectedButton"
                : "styleOfSelectedButton"
            }
            onClick={() => setClickedListButton(false)}
          >
            Insights
          </button>
          {!clickedListButton && (
            <button className="styleOfUnselectedButton">Filter</button>
          )}
        </div>
      </div>

      {clickedListButton && (
        <div style={{ marginLeft: "9px", width: "calc(100% - 18px)" }}>
          <Table data={studentList} from={"feeSectionDashboardOfAdmin"} />
        </div>
      )}

      {!clickedListButton && (
        <div className="feeInsight">
          <div className="CardsOfFeeSection">
            <div className="piechartChartCard">
              <div>
                <PieChart series={series} options={options} />
              </div>
              <div style={{ marginTop: "10%" }}>
                <div className="textShowDiv">
                  <div className="smallRectangleRed"></div>
                  <p>This Month’s Fees (Regular)</p>
                </div>
                <div className="textShowDiv">
                  <div className="smallRectangleBlack"></div>
                  <p>Late Fees</p>
                </div>
                <div className="textShowDiv">
                  <div className="smallRectangleWhite"></div>
                  <p>Not Paid Yet</p>
                </div>
              </div>
            </div>
            <div className="monthFeeCollectionCard">
              <div className="monthRevenue">
                <p className="FeeCollectionInRuppe">₹1,13,000</p>
                <p className="textOfMonthFeeCollectionCard">This month's</p>
                <p className="textOfMonthFeeCollectionCard">Revenue</p>
              </div>
              <div className="monthRevenue">
                <p
                  className="FeeCollectionInRuppe"
                  style={{ color: "#F9F5E5" }}
                >
                  ₹13,000
                </p>
                <p className="textOfMonthFeeCollectionCard">This month's</p>
                <p className="textOfMonthFeeCollectionCard">
                  late fees collection
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeeSection;
