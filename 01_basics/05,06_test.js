//there are two types of datatypes they are 
//1. primitive 
//2.  non-primitive or refrence


//1. Primitive Data Types: 
//there are 7  primitive data types they are :
//1>number
//2>string
//3>boolean
//4>bigint
//5>null
//6>undefined 
//7>SYMBOL

//number 
let num = 23414;
console.log(typeof num);
console.log(num);

//string
let str ="He is gay"
console.log(typeof str);
console.log(str);

//boolean
let isHeGay = false
console.log(typeof isHeGay);
console.log(isHeGay);

// bigInt
let bigNumber =BigInt(75329374290887)
console.log(typeof bigNumber);
console.log(bigNumber);

//null
let empty = null
console.log(typeof empty);
console.log(empty);

//undefined
let mySonsName;
console.log(typeof  mySonsName);
console.log(mySonsName);

//symbol
let id = Symbol(8633)
console.log(typeof id);
console.log(id);


//----------------------non-premitive+++++++++++++++++++++++++++++++++++++++++++++++++++

//there are three types of non-premitive data types they are
//1. array 
//2. object
//3. function


//---------------------------------array=========================================>

let vegetables = ["patato", "cabbage","cucumber", "pumpkin"]
console.log(typeof  vegetables);
console.log(vegetables);

//objects
let myInfo = {
    name : "Nick Shan",
    age : 15,
    hobbies: ["coding","gaming","making websites"]
}
console.log(typeof myInfo);
console.log(myInfo);
// function
let myFunct = function () {
    let x = "hello";
    console.log(x);
};
myFunct(); // call the function

//===========================================memory manaement======================================

//there are two types of memory management they are:
//1. stack
//2.  heap

//stack 

let str1 = "he is good"
let str2 = str1
str2 = "he is doing bad work nowdays"
console.log(str1);
console.log(str2);

//heap 
let good = {
    name : "motu and patlu",
    type : "cartoon",
    age : 30
}
bad = good
bad.name = "john the don" 
console.log(good);
console.log(bad);
