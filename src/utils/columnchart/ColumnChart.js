import React, { useState } from "react";
import ReactApexChart from "react-apexcharts"; // Assuming you have ReactApexChart imported
import "./ColumnChart.css"

const ColumnChart = () => {
  // Use state to manage options and series data
  const colors = ["#2D60FF"]; // Single blue color for all columns
  const [chartData, setChartData] = useState({
    series: [
      {
        name:"Present %",
        data: [21, 22, 10, 28, 16, 21, 13, 23, 44, 44, 30, 44],
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

  return (
    <div style={{backgroundColor:"white",width:"96%",marginLeft:"19px",borderRadius:"9px",marginTop:"20px"}}>
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
