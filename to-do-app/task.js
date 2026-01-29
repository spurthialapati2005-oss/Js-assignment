// task.js
import {
  validateTitle,
  validatePriority,
  validateDueDate
} from "./validator.js";

let tasks = [];
let taskId = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  const titleCheck = validateTitle(title);
  if (!titleCheck.valid) return titleCheck.message;

  const priorityCheck = validatePriority(priority);
  if (!priorityCheck.valid) return priorityCheck.message;

  const dateCheck = validateDueDate(dueDate);
  if (!dateCheck.valid) return dateCheck.message;

  const task = {
    id: taskId++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks = [...tasks, task];
  return "Task added successfully";
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  let found = false;

  tasks = tasks.map(task => {
    if (task.id === taskId) {
      found = true;
      return { ...task, completed: true };
    }
    return task;
  });

  return found ? "Task completed" : "Task not found";
}
