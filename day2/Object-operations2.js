//Exam Result Summary
const marks = {
    maths: 78,
    physics: 65,
    chemistry: 82,
    english: 55
};

//1. Calculate total marks
let totalMarks = 0;
for (let subject in marks) {
    totalMarks += marks[subject];
}
console.log("Total Marks:", totalMarks);

//2. Calculate average marks
let averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average Marks:", averageMarks);

//3. Find the highest scoring subject
let highestMarks = -Infinity;
let topSubject = "";
for (let subject in marks) {
    if (marks[subject] > highestMarks) {
        highestMarks = marks[subject];
        topSubject = subject;
    }
}
console.log("Highest Scoring Subject:", topSubject);

//4. Add a new subject computer: 90
marks.computer = 90;
console.log("Updated Marks:", marks);
