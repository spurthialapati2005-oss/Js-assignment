//Student Performance Dashboard
const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

//1. filter() students who passed (marks ≥ 40)
let passedStudents = students.filter(student => student.marks >= 40);
console.log(passedStudents);

/*2. map() to add a grade field
≥90 → A
≥75 → B
≥60 → C
else → D*/
let gradedStudents = students.map(student => {
    let grade;
    if (student.marks >= 90) grade = 'A';
    else if (student.marks >= 75) grade = 'B';
    else if (student.marks >= 60) grade = 'C';
    else grade = 'D';
    
    return { ...student, grade: grade };
});
console.log(gradedStudents);

//3. reduce() to calculate average marks
let averageMarks = students.reduce((acc, student) => acc + student.marks, 0) / students.length;
console.log(averageMarks);

//4. find() the student who scored 92
let topScorer = students.find(student => student.marks === 92);
console.log(topScorer);

//5. findIndex() of student "Kiran"
let kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log(kiranIndex);