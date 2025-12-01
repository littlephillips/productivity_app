import React, { useState, useEffect } from "react";
import { notify } from "../utils/notify";
import { updateFrequency } from "../utils/frequency";
import dayjs from "dayjs";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const TaskCard = ({ task, updateTask, runningTask, setRunningTask }) => {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(task.timeSpent || 0);
  const [started, setStarted] = useState(false);

  const today = dayjs().format("YYYY-MM-DD");
  const canStart = !task.done || (task.lastCompletedDate && task.lastCompletedDate !== today);

  const getStatusEmoji = () => {
    if (task.done) return "😊";
    if (task.incomplete) return "😢";
    if (running) return "⚡";
    return "⏳";
  };

  const getStatusColor = () => {
    if (task.done) return "text-green-400";
    if (task.incomplete) return "text-red-400";
    if (running) return "text-yellow-400";
    return "text-amber-500";
  };

  

  const remainingTime = Math.max(0, task.requiredTime * 60 - time);
  const remainingDisplay = running ? "" : ` (${Math.floor(remainingTime / 60)}m ${remainingTime % 60}s remaining)`;

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime(prev => {
          const newTime = prev + 1;
          if (newTime >= task.requiredTime * 60) {
            // Auto-end task
            setRunning(false);
            const updatedTask = {
              ...task,
              done: true,
              incomplete: false,
              timeSpent: newTime,
              lastCompletedDate: today,
              status: "completed",
            };
            updateTask(updatedTask);
            setRunningTask(null);
            updateFrequency(task.name, true);
            notify("Task Done for Today", { body: `${task.name} has been completed automatically!` });
            return prev; // Prevent further increments
          }
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running, task, updateTask, setRunningTask, today]);

  const toggleStart = () => {
    if (!canStart) return;
    if (runningTask && runningTask !== task.name) {
      notify("Task in Progress", { body: `${runningTask} is currently running. Finish it first.` });
      return;
    }
    setRunning(!running);
    setStarted(true);
    updateTask({ ...task, status: !running ? "in_progress" : "pending" });
    setRunningTask(!running ? task.name : null);
    if (!running) notify("Task Started", { body: `You started: ${task.name}` });
    else notify("Task Paused", { body: `You paused: ${task.name}` });
  };

  const handleEnd = () => {
    if (!started) return;
    setRunning(false);
    const isComplete = time >= task.requiredTime * 60;
    const updatedTask = {
      ...task,
      done: isComplete,
      incomplete: !isComplete,
      timeSpent: time,
      lastCompletedDate: isComplete ? today : task.lastCompletedDate,
      status: isComplete ? "completed" : "incomplete",
    };
    updateTask(updatedTask);
    setRunningTask(null);
    updateFrequency(task.name, isComplete);
    notify(
      isComplete ? "Task Completed" : "Task Incomplete",
      { body: isComplete ? `Congrats! You finished: ${task.name}` : `You ended early: ${task.name}` }
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 border border-gray-600 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl">{task.name} {getStatusEmoji()}</h3>
        <span className={`text-sm font-semibold ml-auto ${getStatusColor()}`}>{task.status}</span>
      </div>
      <p className="text-sm mb-2">Time Spent: {Math.floor(time / 60)}m {time % 60}s / Required: {task.requiredTime}m{remainingDisplay}</p>
      <div className="flex space-x-3 mt-4 justify-center">
        <button
          onClick={toggleStart}
          disabled={!canStart}
          className={`flex items-center px-4 py-2 rounded-full font-semibold transition ${
            !canStart
              ? "bg-gray-500 cursor-not-allowed opacity-50"
              : running
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {running ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
          {running ? "Pause" : (task.incomplete ? "Continue" : "Start")}
        </button>
        <button
          onClick={handleEnd}
          disabled={!started}
          className={`flex items-center px-4 py-2 rounded-full font-semibold transition ${
            !started
              ? "bg-gray-500 cursor-not-allowed opacity-50"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          <FaStop className="mr-2" />
          End
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
