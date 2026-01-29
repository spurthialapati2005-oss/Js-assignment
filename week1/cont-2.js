//Course Price Tag Labeler
function label(price) {

    //1. If price < 500 → "Budget Course"
    if(price < 500) {
        return "Budget course"
    }

    //2. If price between 500–1000 → "Standard Course"
    if(price >= 500 && price <= 1000) {
        return "Standard course"
    }

    //3. If price > 1000 → "Premium Course"
    if(price > 1000) {
        return "Premium course"
    }
}
//4. Store label in courseTag
let courseTag = label(1000)
//5. Print it
console.log(courseTag)