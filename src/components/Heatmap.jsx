import React from 'react';
import { Bar } from 'react-chartjs-2';

const HeatMap = ({ data, dates }) => {
  const chartData = {
    labels: dates,
    datasets: data.map((vehicle, index) => ({
      label: `Vehicle ${index + 1}`,
      data: vehicle.metrics.kilometers_traveled.map(metric => metric.value),
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust color as needed
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    })),
  };

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
            }],
          },
        }}
      />
    </div>
  );
};

export default HeatMap;
