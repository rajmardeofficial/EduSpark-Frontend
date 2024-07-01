import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; // Assuming you have ReactApexChart imported
import "./ColumnChart.css"
import { useSelector } from "react-redux";
import { AttendancePer, attendanceMonthData } from "../AttendancePer";

const ColumnChart = () => {
  const {listOfAllAttendanceOfStudent} = useSelector((state) => state.student);
  const [listOfMonthAttendanceData, setListOfMonthAttendanceData] = useState();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    if(listOfAllAttendanceOfStudent){
      const data = attendanceMonthData(listOfAllAttendanceOfStudent);
      console.log(data);
      setListOfMonthAttendanceData(data.map(da => AttendancePer(da.isPresentT + da.isPresentF, da.isPresentT)))
      // console.log(data.map(da => AttendancePer(da.isPresentT + da.isPresentF, da.isPresentT)));     
    }
  },[listOfAllAttendanceOfStudent])
  console.log(listOfAllAttendanceOfStudent,listOfMonthAttendanceData);


  // Use state to manage options and series data
  const colors = ["#2D60FF"]; // Single blue color for all columns
  const [chartData, setChartData] = useState({
    series: [
      {
        name:"Present %",
        data: listOfMonthAttendanceData || [0,0],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            console.log(chart);
          },
        },
      },
      yaxis: {
        labels: {
            style: {
              colors:"rgba(0, 0, 0, 0.6)",
              fontSize: "14px",
            },
          },
        min: 0,
        max: 100,
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["Jan"],["Feb"],["Mar"],["Apr"],["May"],["Jun"],
          ["Jul"],["Aug"],["Sep"],["Oct"],["Nov"],["Dec"],
        ],
        labels: {
          style: {
            colors:"rgba(0, 0, 0, 0.6)",
            fontSize: "16px",
          },
        },
      },
      // Set the `colors` property directly to the single color array
      colors,
    },
  });

  useEffect(() => {
    // Update chartData with new listOfMonthAttendanceData
    setChartData(prevState => ({
      ...prevState,
      series: [
        {
          ...prevState.series[0],
          data: listOfMonthAttendanceData || [0, 0],
        },
      ],
    }));
  }, [listOfMonthAttendanceData]);

  return (
    <div style={{backgroundColor:"white",width:"97%",marginLeft:"19px",borderRadius:"9px",marginTop:"20px"}}>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={220}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ColumnChart;
