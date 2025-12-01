

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProgressChart = ({ tasks }) => {
  const data = {
    labels: tasks.map(t => t.name),
    datasets: [
      {
        label: "Minutes Spent",
        data: tasks.map(t => Math.floor(t.timeSpent / 60)),
        backgroundColor: "rgba(59, 130, 246, 0.7)",
      },
    ],
  };

  // return (
  //   <div className="w-full max-w-4xl mx-auto mb-4">
  //     <Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} height={200} />
  //   </div>
  // );
};

export default ProgressChart;
