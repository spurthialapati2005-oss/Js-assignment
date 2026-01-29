//Employee Payroll Processor
const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. filter() employees from IT department
let itEmployees = employees.filter(employee => employee.department === "IT");
console.log(itEmployees);

//2. map() to add: netSalary = salary + 10% bonus
let result2 = employees.map(employee => {
    let netSalary = employee.salary + (employee.salary * 0.10);
    return { ...employee, netSalary: netSalary };
});
console.log(result2);

//3. reduce() to calculate total salary payout
let totalSalaryPayout = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log(totalSalaryPayout);

//4. find() employee with salary 30000
let result4 = employees.find(employee => employee.salary === 30000);
console.log(result4);

//5. findIndex() of employee "Neha"
let result5 = employees.findIndex(employee => employee.name === "Neha");
console.log(result5);

