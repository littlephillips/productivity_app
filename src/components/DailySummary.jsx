import React from "react";

const DailySummary = ({ tasks }) => {
  const done = tasks.filter(t => t.done).length;
  const incomplete = tasks.filter(t => t.incomplete).length;
  const pending = tasks.filter(t => !t.done && !t.incomplete).length;
  const total = tasks.length;

  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden my-3">
      {/* Header */}
      <div className="bg-gray-800 px-5 py-3 border-b border-gray-700">
        <h2 className="text-lg font-bold text-center">Today's Summary</h2>
      </div>

      {/* Compact Stats Row */}
      <div className="grid grid-cols-3 divide-x divide-gray-700">
        <div className="py-4 text-center">
          <p className="text-2xl font-bold text-green-400">{done}</p>
          <p className="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1">
            <span>✅</span> Done
          </p>
        </div>
        <div className="py-4 text-center">
          <p className="text-2xl font-bold text-red-400">{incomplete}</p>
          <p className="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1">
            <span>❌</span> Failed
          </p>
        </div>
        <div className="py-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">{pending}</p>
          <p className="text-xs text-gray-400 mt-1 flex items-center justify-center gap-1">
            <span>⏳</span> Pending
          </p>
        </div>
      </div>

      {/* Total Footer */}
      <div className="bg-gray-800/50 px-5 py-2.5 text-center border-t border-gray-700">
        <p className="text-sm text-gray-300">
          <span className="font-medium">{total}</span> total tasks today
        </p>
      </div>
    </div>
  );
};

export default DailySummary;