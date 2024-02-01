// Javascript is dinamically type language.
//primitive 

//there are 7 types of primitive datatypes they are given below:
//1> string
//2> number
//3> boolean
//4> null
//5> undefined
//6> symbol
//7> bigint

const name = "Nirag" // string
console.log(name);
const value = 36 // number
console.log(value);
const  boolValue =  true ;  // boolean
console.log(boolValue) ;
const x = null // null 
console.log(x);
const cityName = undefined;  // undefined  
console.log(cityName);
const bigNumber =  BigInt(9007199254740991);//BigInt
console.log(bigNumber);

const id = Symbol('874')
console.log(id)

const myId = Symbol('854')
console.log(myId)
//refrence (non prinmitive)
//there are 3 types of non- primitive datatypes the are given below=>
//1> array
//2> object
//3>  function


//array
const powersOfSuperHeros = ["invisibility", "laserbeam", "flight"]
console.log(powersOfSuperHeros);

//object
let myIntro = {
    name: "nick shan",
    age: 25,
  }
  
  console.log(myIntro)

  // function 
// we can also declare valuein function
 let myFunction= function (){
    console.log(hihero)
  }
