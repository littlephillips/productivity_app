import dayjs from "dayjs";

export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { name: "SQL (Zindua)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Typing (zty.pe)", done: false, timeSpent: 0, requiredTime: 10, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Binance (Web App)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Docker (Alisons)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Research (Chrome)", done: false, timeSpent: 0, requiredTime: 90, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Workout (Youtube) ", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Classes (Portable)", done: false, timeSpent: 0, requiredTime: 90, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Meditation (Youtube)", done: false, timeSpent: 0, requiredTime: 10, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Bible Study (Bible)", done: false, timeSpent: 0, requiredTime: 10, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Book Reading (Ebook) ", done: false, timeSpent: 0, requiredTime: 30, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Applications (Firefox)", done: false, timeSpent: 0, requiredTime: 90, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Mern Stack (mygreatlearning)", done: false, timeSpent: 0, requiredTime: 90, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Data Structures (MIT Youtube)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Programming Tools (mygreatlearning)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "System Design (FreeCodeCamp Youtube)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Software Testing (Alisons + Youtube)", done: false, timeSpent: 0, requiredTime: 45, incomplete: false, lastCompletedDate: null, status: "pending" }
  ];
  
  // Reset tasks if it's a new day

  const today = dayjs().format("YYYY-MM-DD");
  return tasks.map(task => {
    if (task.lastCompletedDate && task.lastCompletedDate !== today) {
      return { ...task, done: false, timeSpent: 0, incomplete: false, status: "pending" };
    }
    return task;
  });


};

export const clearTasks = () => {
  localStorage.removeItem("tasks");
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
