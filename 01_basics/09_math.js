console.log(Math);

console.log(Math.abs(-10)) //Returns an absolute value, a positive number, or a number of zero
const negValue = -784;
console.log(Math.abs(negValue));

console.log(Math.round(854.84));
console.log(Math.ceil(854.84));
console.log(Math.floor(854.84));

console.log(Math.min(23,  96, 12, 78, 45)); //  Returns the smallest value in the list
console.log(Math.max(23,  96, 12, 78, 45));// Returns the biggest value in the list

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
