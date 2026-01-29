//Date Comparison & Validation 
let enrollmentDeadline = new Date("2026-01-20");
let today = new Date();
//1.Check if:
// * Today is before deadline → "Enrollment Open"
if(today<enrollmentDeadline){
    console.log("Enrollment Open")
}
// * Today is after deadline → "Enrollment Closed"
else{
    console.log("Enrollment Closed")
}
//2. Validate user input date:
// * Input: "2026-02-30"
// * Detect whether the date is valid or invalid
function isValidDate(dateString) {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) return false;
  
    const [year, month, day] = dateString.split("-").map(Number);
  
    return (
      date.getFullYear() === year &&
      date.getMonth() + 1 === month &&
      date.getDate() === day
    );
}
let userInput = "2026-02-30";
if(isValidDate(userInput)){
    console.log("Valid Date");
}
else{
    console.log("Invalid Date");
}
