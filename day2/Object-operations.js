//User Profile Manager
const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
};

//1. Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

//2. Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
console.log("Last Login:", user.lastLogin);

//3. Update role from "student" to "admin"
user.role = "admin";
console.log("Updated Role:", user.role);

//4. Delete the isActive property
delete user.isActive;
console.log("isActive property deleted:", user);

//5. Use Object.keys() to list all remaining fields
console.log("Remaining fields:", Object.keys(user));
