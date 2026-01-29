//Enrollment Eligibility Checker
function message(hasPaid,hasCompletedBasics) {

    //1. If both conditions are true → "Enroll Now"
    //2. Otherwise → "Complete Requirements"
    //3. Use ternary operator
    return (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements"

}
//4. Store the result in enrollMessage
let enrollMessage = message(true, false)
//5. Print it
console.log(enrollMessage)