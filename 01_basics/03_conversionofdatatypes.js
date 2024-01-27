let score = "111"

console.log(typeof score);


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedin = 1 
let booleanIsLoggedIn = Boolean(isLoggedin);
console.log(booleanIsLoggedIn);


// 1 => true ; 0 => false 
// "" => false 
// "nishan" => true 

let someNumber = 33 

let stringNumber = String(someNumber);
console.log(stringNumber);

let age = 99;
let numberIntoString = String(age);
console.log(numberIntoString);
console.log(typeof numberIntoString)

let dipeshIsGay = true;
let booleanInInt = BigInt(dipeshIsGay);
console.log(booleanInInt);
console.log(typeof booleanInInt);
