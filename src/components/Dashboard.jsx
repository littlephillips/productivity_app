import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import DailySummary from "./DailySummary";
import { getTasks, saveTasks } from "../utils/storage";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [runningTask, setRunningTask] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskTime, setNewTaskTime] = useState(30);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const updateTask = (updatedTask) => {
    setTasks(prev => prev.map(t => t.name === updatedTask.name ? updatedTask : t));
  };

  const addTask = () => {
    if (!newTaskName.trim()) return;
    const newTask = {
      name: newTaskName,
      done: false,
      timeSpent: 0,
      requiredTime: parseInt(newTaskTime),
      incomplete: false,
      lastCompletedDate: null,
      status: "pending"
    };
    setTasks(prev => [...prev, newTask]);
    setNewTaskName("");
    setNewTaskTime(30);
    setShowAddModal(false);
  };

  // Sort by requiredTime descending
  const sortedTasks = [...tasks].sort((a, b) => b.requiredTime - a.requiredTime);

  return (
    <div className="min-h-screen bg-gray-950 text-white pb-20">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Phillips Daily Grind
        </h1>

        <DailySummary tasks={tasks} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {sortedTasks.map(task => (
            <TaskCard
              key={task.name}
              task={task}
              updateTask={updateTask}
              runningTask={runningTask}
              setRunningTask={setRunningTask}
            />
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition transform z-50 flex items-center gap-3 text-lg font-bold"
      >
        <FaPlus size={28} /> Add Task
      </button>

      {/* Add Task Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Add New Task</h2>
            <input
              type="text"
              placeholder="Task name (e.g., LeetCode)"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mb-6">
              <label className="block text-sm mb-2">Required Time (minutes)</label>
              <input
                type="number"
                min="1"
                value={newTaskTime}
                onChange={(e) => setNewTaskTime(e.target.value)}
                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={addTask}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold transition"
              >
                Add Task (temp)
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 py-3 rounded-lg font-bold transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;



