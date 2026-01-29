//COURSE CATALOG ENGINE
// 1. Get published courses
const getPublishedCourses = courses =>
    courses.filter(course => course.published);
  
// 2. Sort courses by price (high → low)
const sortCoursesByPriceDesc = courses =>
    [...courses].sort((a, b) => b.price - a.price);
  
// 3. Extract { title, price } only
const getCourseSummaries = courses =>
    courses.map(({ title, price }) => ({ title, price }));
  
// 4. Calculate total value of published courses
const getTotalPublishedCourseValue = courses =>
    courses
      .filter(course => course.published)
      .reduce((sum, course) => sum + course.price, 0);
  
// 5. Add a new course immutably
const addCourse = (courses, newCourse) =>
    [...courses, newCourse];
  