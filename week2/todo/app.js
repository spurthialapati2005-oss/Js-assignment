// app.js
import { addTask, getAllTasks, completeTask } from "./task.js";

console.log("=== Todo App ===\n");

console.log(addTask("Learn JS", "high", "2026-02-01"));
console.log(addTask("Buy groceries", "medium", "2026-01-30"));
console.log(addTask("Go gym", "low", "2026-02-05"));

console.log("\nAll Tasks:");
console.log(getAllTasks());

console.log("\nCompleting Task ID 2:");
console.log(completeTask(2));

console.log("\nUpdated Tasks:");
console.log(getAllTasks());
