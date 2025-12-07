

import dayjs from "dayjs";

// Define ALL default tasks here (including any new ones you add in the future)
const DEFAULT_TASKS = [
  { name: "SQL (Zindua)", requiredTime: 60 },
  { name: "Typing (zty.pe)", requiredTime: 10 },
  { name: "Binance (Web App)", requiredTime: 60 },
  { name: "Docker (Alisons)", requiredTime: 60 },
  { name: "Research (Chrome)", requiredTime: 90 },
  { name: "Workout (Youtube)", requiredTime: 60 },
  { name: "Classes (Portable)", requiredTime: 90 },
  { name: "Meditation (Youtube)", requiredTime: 10 },
  { name: "Bible Study (Bible)", requiredTime: 10 },
  { name: "Book Reading (Ebook)", requiredTime: 30 },
  { name: "Applications (Firefox)", requiredTime: 90 },
  { name: "LeetCode Daily Challenge", requiredTime: 45 },
  { name: "Mern Stack (mygreatlearning)", requiredTime: 90 },
  { name: "Data Structures (MIT Youtube)", requiredTime: 60 },
  { name: "Programming Tools (mygreatlearning)", requiredTime: 60 },
  { name: "System Design (FreeCodeCamp Youtube)", requiredTime: 60 },
  { name: "Software Testing (Alisons + Youtube)", requiredTime: 45 },
];

/* * Helper: Create a fresh task object with default values */
const createFreshTask = (template) => ({
  name: template.name,
  requiredTime: template.requiredTime,
  done: false,
  timeSpent: 0,
  incomplete: false,
  lastCompletedDate: null,
  status: "pending",
});

export const getTasks = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks") || "null");
  const today = dayjs().format("YYYY-MM-DD");

  let tasks = [];

  if (!savedTasks || !Array.isArray(savedTasks)) {
    // First time user: use all defaults
    tasks = DEFAULT_TASKS.map(createFreshTask);
  } else {
    // Existing user: keep their tasks + add any missing new defaults
    const savedTaskNames = new Set(savedTasks.map(t => t.name));
    
    savedTasks.forEach(savedTask => {
      // Preserve user progress, but reset if from previous day
      if (savedTask.lastCompletedDate && savedTask.lastCompletedDate !== today) {
        tasks.push({
          ...savedTask,
          done: false,
          timeSpent: 0,
          incomplete: false,
          status: "pending",
        });
      } else {
        tasks.push(savedTask);
      }
    });

    // Add any new default tasks that the user doesn't have yet
    DEFAULT_TASKS.forEach(template => {
      if (!savedTaskNames.has(template.name)) {
        tasks.push(createFreshTask(template));
      }
    });
  }

  return tasks;
};

export const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
