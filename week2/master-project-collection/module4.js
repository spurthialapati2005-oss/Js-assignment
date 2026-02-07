//ROLE & PERMISSION ENGINE

//given data
const roles = {
    admin: ["create", "update", "delete", "view"],
    student: ["view"]
};
  
//1.Get all role names
    const roleNames=Object.keys(roles)
    console.log("role names are:",roleNames);
  
//2.Check if student can delete
    const checkStudentCanDelete=roles.student.includes("delete")
    console.log("student has delete permission:",checkStudentCanDelete)
  
//3. Create a flat list of all unique permissions
    const allUniquePermissions=[... new Set(Object.values(roles).flat())]
    console.log(allUniquePermissions)

//4.Add new role moderator immutably
    let updatedRole={
        ...roles,
        moderator:['create','view']
    }
    console.log(updatedRole)