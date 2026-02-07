//COURSE CATALOG ENGINE

//given data
const courses = [
    { id: 101, title: "JavaScript", price: 999, published: true },
    { id: 102, title: "React", price: 1499, published: false },
    { id: 103, title: "Node", price: 1299, published: true }
];

// 1. Get published courses
const getPublishedCourses = courses.filter(course => course.published === true);
console.log("Published Courses:", getPublishedCourses)
  
// 2. Sort courses by price (high → low)
const sortedCourses = courses.sort((First,second)=>second.price-First.price);
console.log(sortedCourses)
 
// 3. Extract { title, price } only
const getCourseSummaries = courses.map(({ title, price }) => ({ title, price }));
console.log("Course Summaries:", getCourseSummaries)
  
// 4. Calculate total value of published courses
const totalValueofPublishedCourses=courses.reduce((acc,course)=>(course.published===true)?acc+course.price:acc,0);
console.log("total value of published course:",totalValueofPublishedCourses)  
  
// 5. Add a new course immutably
const newCourse={
    id: 104, title: "Express", price: 1699, published: true
}
const addCourse = [...courses, newCourse];
console.log(addCourse)
  
export{courses}