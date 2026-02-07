// SHOPPING CART ENGINE
import {courses} from './module2.js'
const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// 1. Merge cart with courses to get full course info
const mergedCart=cart.map(item =>{
  const course = courses.find(c => c.id===item.courseId);
  return {
      ...course,
      qty:item.qty
  }
});
console.log(mergedCart)

// 2. Calculate total cart amount
const getTotalCartAmount = cart.reduce((total, item) => {
      const course = courses.find(c => c.id === item.courseId);
      return total + course.price * item.qty;
}, 0);
console.log(getTotalCartAmount)
  
// 3. Increase quantity of a course (immutably)
const increasedQuantity=(cart,id)=>{
  return cart.map(item =>{
      if(item.courseId===id){
          return {...item,qty:item.qty+1}
      };
          return item;
      });
}
console.log(increasedQuantity(cart,103))

// 4. Remove a course from cart
const removeFromCart=(cart,id) =>{
  return cart.filter(item => item.courseId!==id);
}
const updatedCart = removeFromCart(cart,103)
console.log(updatedCart)
  
// 5. Check if all cart items are paid courses
const areAllPaidCourses = cart.every(item => {
  const course = courses.find(c => c.id === item.courseId);
      return   course.price > 0;
});
console.log("All are paid courses:",areAllPaidCourses);
  