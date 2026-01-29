// Smart Login Status Engine
function check(isLoggedIn,isProfileComplete) {

    //1. If user is not logged in → show "Please login"
    if(!isLoggedIn) {
        return "Please login"
    }

    //2. If logged in but profile incomplete → show "Complete your profile"
    if(isLoggedIn && !isProfileComplete) {
        return "Complete your profile"
    }

    //3. If logged in and profile complete → show "Welcome back!"
    if(isLoggedIn && isProfileComplete) {
        return "Welcome back!"
    }
}
//4. Store the result in message
let message = check(true, false)
//5. Print the message
console.log(message)