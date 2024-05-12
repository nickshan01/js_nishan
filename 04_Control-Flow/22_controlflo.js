const isHEGAY = true
if (isHEGAY) {
    console.log("Yes he is gay" );
}else{
    console.log("No, He isn");
}


const random = Math.round(Math.random() * 100) + 1;
console.log(random);

if(random===46){
    console.log("you are lucky")
}else{
    console.log("you are unlucky");
}

const score = 200
if (score > 100) {
    const power ="fly"
    console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);
const balance = 1000
if (balance < 500) {
    console.log("less than 500");
}else if (balance < 990) {
    console.log("less than 990");   
}else {
    console.log("it is less than 1200");
}



const isLoggedIn = true 
const debitCard = true 
const loggedFromGoogle = false
const loggedFromGmail = true

if (isLoggedIn && debitCard) {
    console.log("You are allow to buy games");
}

if (loggedFromGoogle || loggedFromGmail) {
    console.log("User logged in");
}

// Nullish Coalescing Operator(??): null defined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = undefined ?? 10 ?? 15 
console.log(val1); 

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
