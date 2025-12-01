import React from "react";

const DailySummary = ({ tasks }) => {
  const done = tasks.filter(t => t.done).length;
  const incomplete = tasks.filter(t => t.incomplete).length;
  const pending = tasks.filter(t => !t.done && !t.incomplete).length;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md my-4 w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Daily Summary</h2>
      <div className="flex flex-row justify-center items-center gap-4 flex-wrap">
        <div className="text-center bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="text-green-400 text-lg font-semibold">✅ Completed: {done}</p>
        </div>
        <div className="text-center bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="text-red-400 text-lg font-semibold">❌ Incomplete: {incomplete}</p>
        </div>
        <div className="text-center bg-gray-800 p-4 rounded-lg border border-gray-700">
          <p className="text-yellow-400 text-lg font-semibold">⏳ Pending: {pending}</p>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-300">📌 Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default DailySummary;
