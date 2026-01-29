// SHOPPING CART ENGINE
// 1. Merge cart with courses to get full course info
const getCartWithCourseDetails = (cart, courses) =>
    cart.map(item => {
      const course = courses.find(c => c.id === item.courseId);
      return {
        ...item,
        title: course.title,
        price: course.price
      };
    });
  
// 2. Calculate total cart amount
const getTotalCartAmount = (cart, courses) =>
    cart.reduce((total, item) => {
      const course = courses.find(c => c.id === item.courseId);
      return total + course.price * item.qty;
    }, 0);
  
// 3. Increase quantity of a course (immutably)
const increaseCartQty = (cart, courseId) =>
    cart.map(item =>
      item.courseId === courseId
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  
// 4. Remove a course from cart
const removeFromCart = (cart, courseId) =>
    cart.filter(item => item.courseId !== courseId);
  
// 5. Check if all cart items are paid courses
const areAllPaidCourses = (cart, courses) =>
    cart.every(item => {
      const course = courses.find(c => c.id === item.courseId);
      return course.price > 0;
    });
  