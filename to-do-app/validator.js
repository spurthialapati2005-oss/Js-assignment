// validator.js

// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
  if (!title || title.trim().length < 3) {
    return { valid: false, message: "Title must be at least 3 characters" };
  }
  return { valid: true };
}

// 2. Validate priority (low, medium, high)
export function validatePriority(priority) {
  const allowed = ["low", "medium", "high"];
  if (!allowed.includes(priority)) {
    return { valid: false, message: "Priority must be low, medium, or high" };
  }
  return { valid: true };
}

// 3. Validate due date (future date)
export function validateDueDate(date) {
  const due = new Date(date);
  const today = new Date();

  if (isNaN(due.getTime()) || due <= today) {
    return { valid: false, message: "Due date must be a future date" };
  }
  return { valid: true };
}
