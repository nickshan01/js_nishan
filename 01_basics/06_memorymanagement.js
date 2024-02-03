//memory are two types
//1> stsck  memory
//2> heap memory 

//stack memory is used in primitive type 
//heap memory is used in non-primitive type
//the memory which are defined in  the stack are automatically cleaned up when they go out of scope.
/*the variable which are declared in  the stack memory it gives copy of the value to another variable,
if we change one variable other will not be affected by that*/
//the memory which are defined in the heap memory,  it gives orginal 

let myBrotherName = "Motu"
let mySisterName = myBrotherName
mySisterName = "patlu"
console.log(myBrotherName);
console.log(mySisterName);


let myBrotherIntro = {
    name :  "motu",
    age :  30,
}
let  mySisterIntro = myBrotherIntro;

mySisterIntro.name = "patlu"

console.log(myBrotherIntro);
console.log(mySisterIntro);
