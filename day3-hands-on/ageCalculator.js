//Age Calculator
let dob = "2000-05-15" 
// 1. Calculate exact age in years
function calculateAge(dob) {
    let birthDate = new Date(dob);
    let today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
    
    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    return age;
}