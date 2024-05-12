let a = 20
const b = 40
// var c = 50

// {} is a scope 
if (true) {
    let a = 200;
    const b = 400;
    // var c = 500;
    console.log("Inner:", a);
}
 console.log(a);
console.log(b);
// console.log(c);
