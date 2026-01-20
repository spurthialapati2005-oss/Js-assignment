//Online Course Name Processor
const course=["javascript","react","node","mongodb","express"];

//1. filter() courses with name length > 5
let result1 = course.filter(ele=>{
    if(ele.length>5)
        return ele
})
console.log(result1)

//2. map() to convert all course names to uppercase
let result2 = course.map(ele=>ele.toUpperCase())
console.log(result2)

//3. reduce() to generate a single string
let result3 = course.reduce((acc,ele)=>acc+"|"+ele)
console.log(result3)

//4. find() course "react"
let result4 = course.find(ele=>ele=="react")
console.log(result4)

//5. findIndex() of "node"
let result5 = course.findIndex(ele=>ele=="node")
console.log(result5)