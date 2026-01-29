//Date Creation & Extraction
// 1. Create a Date object for current date & time.
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);
/* 2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds */
let year = currentDate.getFullYear();
console.log("Year:", year);

let month = currentDate.getMonth() + 1; // Months are 0-indexed
console.log("Month:", month);

let date = currentDate.getDate();
console.log("Date:", date);

let dayOfWeek = currentDate.getDay(); 
console.log("Day of Week:", dayOfWeek);

let hours = currentDate.getHours();
console.log("Hours:",hours);

let minutes = currentDate.getMinutes();
console.log("Minutes:",minutes);

let seconds = currentDate.getSeconds();
console.log("Seconds:",seconds);

//3. Display the date in this format: DD-MM-YYYY HH:mm:ss 
let formattedDate =  date + "-" + month + "-" + year + " " + hours + ":" + minutes + ":" + seconds;
console.log("Formatted Date:", formattedDate);



