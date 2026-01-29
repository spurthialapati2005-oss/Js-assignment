// Shallow Copy
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
      theme: "dark",
      language: "en"
    }
};
//1.Create a shallow copy of user
const userCopy = { ...user };
//2.Change:
// i. name in the copied object
userCopy.name = "Amit";
// ii. preferences.theme in the copied object
userCopy.preferences.theme = "light";
// iii .Log both original and copied objects
console.log("Original User:", user);
console.log("Copied User:", userCopy);
// iv. Observe what changes and what doesn’t
// Observation:
// The name property in the copied object changed without affecting the original object.
// However, the preferences.theme property change in the copied object also affected the original object,
// because the preferences object is shared between the original and copied objects in a shallow copy.
