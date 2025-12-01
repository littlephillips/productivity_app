
import React from "react";
import { Bar } from "react-chartjs-2";
import { getFrequency } from "../utils/frequency";

const FrequencyChart = () => {
  const freq = getFrequency();
  const labels = Object.keys(freq);
  const completeData = labels.map(key => freq[key].complete || 0);
  const incompleteData = labels.map(key => freq[key].incomplete || 0);

  // return (
  //   <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md my-4 w-full max-w-4xl mx-auto">
  //     <h2 className="text-xl font-bold mb-2">Task Frequency</h2>
  //     <div className="h-64">
  //       <Bar
  //         data={{
  //           labels,
  //           datasets: [
  //             { label: "Complete Days", data: completeData, backgroundColor: "rgba(34,197,94,0.7)" },
  //             { label: "Incomplete Days", data: incompleteData, backgroundColor: "rgba(239,68,68,0.7)" },
  //           ],
  //         }}
  //         options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "top" } } }}
  //       />
  //     </div>
  //   </div>
  // );
};

export default FrequencyChart;
