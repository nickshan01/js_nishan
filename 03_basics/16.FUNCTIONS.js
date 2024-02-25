function display(){
    console.log("n");
    console.log("i");
    console.log("c");
    console.log("k");
}
display(); // display = refrence  to the function, ()= execute 

 function addNumber(number1, number2){
 console.log(number1 + number2);
}
addNumber(23 , 23);
addNumber(54, "54")// it will show 5454 because it thinks  that "54" is a string and it convert 54 into string
addNumber(3, "a") // it return 3a


function addNumber(number1, number2){
    let result =  number1 + number2;
    return result
}
const result = addNumber(23 , 23)
console.log("return: ", result);

function addTwoNumber(number1, number2){
    
    return  number1 + number2
}
const ans = addTwoNumber(23 , 23);
console.log("return: ", ans  );

function loginMessage(userName){
    if(userName === undefined){
        console.log("please enter a username");
        return 
    }
    return `Hello ${userName}, Welcome`

}
console.log(loginMessage("Nick Shan"));
console.log(loginMessage());



function developername(userName = "nickshan"){
    if(userName === undefined){
        console.log("please enter a username");
        return 
    }
    return `Hello ${userName}, Welcome`

}
console.log(developername());



function herosname(userName = "nickshan"){
    if(userName === undefined){
        console.log("please enter a username");
        return 
    }
    return `Hello ${userName}, Welcome`

}
console.log(herosname("heros"));
