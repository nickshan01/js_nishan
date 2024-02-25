const num = [89478, 732, 7843, 743, 78342]
console.log(num[0]); //accessing the element at position zero of the array (89478)

const herosMarvels = ["ironman",  "spiderman", "thor", "BlackPanther", "Blackwidow"]
const herosDC = ["Superman" , "Omniman", "Invincible", "Batman" ]
console.log(herosMarvels);
console.log(herosDC);
herosDC.push("wonderwoman");

const newArray = num.join()//The join method is used to combine all elements in an array into a single string. The separator
console.log(newArray);
console.log(num);
console.log(typeof newArray);

const myArray = new Array(10, 43321, 324)
console.log(myArray);
myArray.pop()//it remove the last element
myArray.unshift(343423423)// it add an element in the beginning of the array
console.log(myArray.includes(8548943));
console.log(myArray.indexOf(43321));
myArray.shift()//remove the first element
console.log(myArray);


// slice and splice  

console.log("a" , herosMarvels);
const myArray1 =herosMarvels.slice(1,4)
console.log(myArray1);
console.log("b", herosMarvels);


myArray2 = herosMarvels.splice(1,4)
console.log("c", herosMarvels);
console.log(myArray2);
console.log("c", herosMarvels);
