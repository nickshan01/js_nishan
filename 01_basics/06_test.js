/*//memory are two types
//1> stack  memory
//2> heap memory 

//stack memory is used in primitive type 
//heap memory is used in non-primitive type
//the memory which are defined in  the stack are automatically cleaned up when they go out of scope.
the variable which are declared in  the stack memory it gives copy of the value to another variable,
if we change one variable other will not be affected by that
the memory which are defined in the heap memory,  it gives orginal 
*/
const myName = "Nick Shan";
let myfriendName = myName;
myfriendName = "Vs Code";

console.log(myName);
console.log(myfriendName);
/*1)Here, myName is a string, which is a primitive data type.
When you assign myName to myfriendName, it creates a copy of the string value.
Changing myfriendName does not affect0 myName.
This is because primitive data types are stored directly in memory.

2)Since primitive data types are stored directly in memory,
each variable holding a primitive type has its own space in memory.
When you assign one primitive variable to another, 
a copy of the value is made.
This means that changes to one variable do not affect the other. 
This separation of memory allows for more efficient use of memory when dealing with simple values.*/


let common_object={
    name : "object",
    property: "key-value-pair",
    }; /*This line declares an object 
common_object with properties name,property*/

let varible1=common_object;//varible1 is referencing to object ie.common_object.
let varible2=varible1;//Both varaibles variable1&2 referencing to same object.
varible1.name="common_object";//changes can be made to object through any referencing varible.
varible2.property="reference type";

console.log(varible1);
console.log(varible2);
/*This helps in efficent memory management as it  avoids redundant storage of identical information 
and ensures that both variables stay in sync without duplicating the object's data.*/
