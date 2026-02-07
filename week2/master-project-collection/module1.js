//USER PROCESSING ENGINE

//given data
const users = [
    { id: 1, name: "Ravi", role: "student", active: true },
    { id: 2, name: "Anil", role: "admin", active: true },
    { id: 3, name: "Suman", role: "student", active: false }
];

// 1. Get only active users
const getActiveUsers = users.filter(user => user.active);
console.log("Active users:",getActiveUsers)
  
// 2. Extract names of active users
const getActiveUserNames = users.filter(user => user.active).map(user => user.name);
console.log("Active UserNames:",getActiveUserNames)
  
// 3. Check if any admin exists
const isAdminPresent = users.some(user => user.role === "admin");
console.log(isAdminPresent)
  
// 4. Find user by id
function findUserById(users, id) {
    return users.find(user => user.id === id);
}
const userByID = findUserById(users, 2);
console.log(userByID);

// 5. Deactivate a user immutably
const updatedUsers = users.map(user => user.id === 1 ? { ...user, active: false } : user);
console.log(updatedUsers)
  