const vegetables = ["broccoflower", "broccoli", "brussels", "sprouts"]
const fruits = ["apple","banana","cherry","grape"]

// Using push method to add individual fruit elements to vegetables array
vegetables.push(...fruits)
console.log(vegetables)

// Using concat method to concatenate two arrays
const allFruits_vegtables = vegetables.concat(fruits)
console.log(allFruits_vegtables)

// Using spread operator to spread individual elements of arrays
const allOf_fruits_vegtables = [...vegetables, ...fruits]
console.log(allOf_fruits_vegtables)


const numArray = [1, 2, 3, 4 ,5 , 6,[7], 8 , 9 , [10,11,[12]]]
const flattenedNumArr = numArray.flat(Infinity)
console.log(flattenedNumArr)

