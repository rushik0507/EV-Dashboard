import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  Data,
  countDischargedVehicles,
  countFullyChargedVehicles,
  countMediumChargedVehicles,
  countShortChargedVehicles,
} from "../components/Data";

function Heatmap() {
  console.log(countFullyChargedVehicles());

  const [chartData, setChartData] = useState({
    series: [
      {
        data: [
          {
            x: "Long",
            y: countFullyChargedVehicles().count,
            CarbonEmissionSaved: countFullyChargedVehicles().sumCO2,
            kilometer:countFullyChargedVehicles().sumKilometers
          },
          {
            x: "Medium",
            y: countMediumChargedVehicles().count,
            CarbonEmissionSaved: countMediumChargedVehicles().sumCO2,
            kilometer:countMediumChargedVehicles().sumKilometers
          },
          {
            x: "Short",
            y: countShortChargedVehicles().count,
            CarbonEmissionSaved: countShortChargedVehicles().sumCO2,
            kilometer:countShortChargedVehicles().sumKilometers
          },
          {
            x: "Discharged",
            y: countDischargedVehicles().count,
            CarbonEmissionSaved: countDischargedVehicles().sumCO2,
            kilometer:countDischargedVehicles().sumKilometers
          },
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
      colors: ["#3DAF29", "#F7B844", "#ADD8C7", "#000"],
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
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

          return (
            "<ul>" +
            "<li><b>Carbon Emission Saved</b>: '" +
            data.CarbonEmissionSaved +
            "'</li>" +
            "<li><b>Total Kilometer</b>: '" +
            data.kilometer +
            "'</li>" +
            "</ul>"
          );
        },
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
