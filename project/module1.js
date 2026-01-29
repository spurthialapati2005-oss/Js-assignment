//USER PROCESSING ENGINE
// 1. Get only active users
const getActiveUsers = users => users.filter(user => user.active);
  
// 2. Extract names of active users
const getActiveUserNames = users =>
    users.filter(user => user.active).map(user => user.name);
  
// 3. Check if any admin exists
const isAdminPresent = users =>
    users.some(user => user.role === "admin");
  
// 4. Find user by id
const findUserById = (users, id) => 
    users.find(user => user.id === id);
  
// 5. Deactivate a user immutably
const deactivateUser = (users, id) => 
    users.map(user => user.id === id ? { ...user, active: false } : user);
  