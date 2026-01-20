//Daily Temperature Analyzer
const temp = [32,35,28,40,38,30,42]

//1. filter() temperatures above 35
let result1 = temp.filter(ele=>ele>35)
console.log(result1)

//2. map() to convert all temperatures from Celsius → Fahrenheit
let result2 = temp.map(ele=>((ele*1.8)+32))
console.log(result2)

//3. reduce() to calculate average temperature
let result3 = temp.reduce((acc,ele)=>{
    let sum = acc+ele;
    return sum/temp.length
}
)
console.log(result3)

//4. find() first temperature above 40
let result4 = temp.find(ele=>ele> 40)
console.log(result4)

//5. findIndex() of temperature 28
let result5 = temp.findIndex(ele=>ele==28)
console.log(result5)