import dayjs from "dayjs";

export const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { name: "Mern Stack (mygreatlearning)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Data Structures (MIT Youtube)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Programming Tools (mygreatlearning)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "System Design (FreeCodeCamp Youtube)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Typing (zty.pe)", done: false, timeSpent: 0, requiredTime: 10, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "SQL (Zindua)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Docker (Alisons)", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Workout", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Meditation", done: false, timeSpent: 0, requiredTime: 10, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Book Reading", done: false, timeSpent: 0, requiredTime: 30, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Bible Study", done: false, timeSpent: 0, requiredTime: 10, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Software Testing (Alisons + Youtube)", done: false, timeSpent: 0, requiredTime: 45, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Applications", done: false, timeSpent: 0, requiredTime: 120, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "Binance", done: false, timeSpent: 0, requiredTime: 60, incomplete: false, lastCompletedDate: null, status: "pending" },
    { name: "classes", done: false, timeSpent: 0, requiredTime: 120, incomplete: false, lastCompletedDate: null, status: "pending" }
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

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
