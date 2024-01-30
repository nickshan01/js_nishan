"use strict"
// consoole.log is usedtodisplay any value 
//console.log(helloworld);
//CODE SHOULD BE SIMPLE AND READEABLE

//---------------------------------------------------let,const,and var --------------------------------------------------------------
//let, const, and var are used to declare the variable in javascript 
let x = "helloworldnishan"// let can be reasinged and it is global scoped and it is blocked scoped inside the function
console.log(x);

var y = "i am nick shan" /* var is a function scoped and it  can redeclared inside function  but it is reassined anywhere in outside of 
function  */
console.log(y);

const z = "hi " // constant variable cannot ressained by another value 
console.log(z);

// example of let is blockscoped ==>

//function example(){

//let h = "i am a coder  "
//console.log(h)
//if(true){
//  let i = "i love coding "
//  console.log(i);
//}
//i="i love play game "
//console.log(i);
//}
//exapmle();

// exaple of var is function scoped ==>

function fun(){
   var nick="he like coding"
   console.log(nick);
   if(true){
    var john = "he likes playing game "
    console.log(john);
    john = "nowdays he doesn't likesto  play game "
    console.log(john)
   }
}
fun();
//john = "he loves eating pizza"
//console.log(john);

//example of const is block scoped

function fun(){
    var nic="he is coding"
    console.log(nic);
    if(true){
     var joh = "he likes eating pizza "
     console.log(joh);
    // john = "nowdays he doesn't likesto  play game "
    // console.log(joh)
    }
 }
 fun();
 //joh = "he loves eating pizza"
 //console.log(joh);

 //---------------------------------------------datatypes-----------------------------------------------------------------------------



 console.log(6746 + 84785);

 let  a = 10
 let b = 8945
 let c = a + b;
 console.log(c);

 //NUMBERS 1 TO 50
 //BIGINT 1 to 1000000000000000000000000000000
 //strings 
 //null
 //undfined
 //boolean 

 let isLoggedin = true    //boolean 
 let name = "nickshan"    //string
 let age =7              //number
 let  gender = null      //null
 let profileState;       //undefined

 console.log(typeof isLoggedin);
 console.table([isLoggedin, name, age, gender, profileState]);

 //-------------------------------------------------conversion of datatypes ------------------------------------------------
//it is use to convert one datatype to another
let score = "24" 

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


let bool = "mummy"
let checkBool = Boolean(bool);
console.log(checkBool);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let value = 7843
let negvalue = -value
console.log(negvalue);

let level=10
++level
console.log(level);


let str1 = "hello"
let str2 = "kale"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 56)
console.log(12 + 1234 + "85");

console.log(3>2);
console.log(3>=2);
console.log(3<2);
console.log(3==2);
console.log(3===2);
console.log(3!=2);

console.log(null>0);
console.log(null<0);
console.log(null>=0);

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
