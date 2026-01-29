//ROLE & PERMISSION ENGINE
// 1. Get all role names
const getRoleNames = roles =>
    Object.keys(roles);
  
// 2. Check if student can delete
const canStudentDelete = roles =>
    roles.student.includes("delete");
  
// 3. Create flat list of all unique permissions
const getAllUniquePermissions = roles =>
    [...new Set(Object.values(roles).flat())];
  
// 4. Add new role moderator immutably
const addRole = (roles, roleName, permissions) => ({
    ...roles,
    [roleName]: permissions
    });
  