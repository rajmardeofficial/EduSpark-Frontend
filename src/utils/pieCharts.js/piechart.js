import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./PieChart.css"

const PieChart = ({series,options}) => {

  return (
    <div>
      <div id="chart" style={{display:"flex",alignItems:"center",justifyContent:"center"}} >
        <ReactApexChart options={options} series={series} type="pie" width={340} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;
