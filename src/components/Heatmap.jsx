import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  Data,
  countDischargedVehicles,
  countFullyChargedVehicles,
  countMediumChargedVehicles,
  countShortChargedVehicles,
} from "../components/Data";
import "../stylesheet/heatmap.css";

function Heatmap() {
  console.log(countFullyChargedVehicles());

  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          { x: "Long", y: countFullyChargedVehicles() },
          { x: "Medium", y: countMediumChargedVehicles() },
          { x: "Short", y: countShortChargedVehicles() },
          { x: "Discharged", y: countDischargedVehicles() },
        ],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        type: "treemap",
      },
      colors: ["#3DAF29", "#FFBC00", "#FF0000", "#000000"],
      title: {
        text: "Fleet Charge Levels",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "24px",
        },
        formatter: function (text, op) {
          return [text, op.value];
        },
        offsetY: -4,
      },
    },
  });

  return (
    <>
      <div className="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="treemap"
        />
      </div>
    </>
  );
}

export default Heatmap;
