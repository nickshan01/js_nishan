function calculateNum(...num1){
    return num1
}
console.log(calculateNum(100, 200, 300, 400));

function testif(val1, val2, ...numa){
return numa
}
console.log(testif(100 ,200 ,300 ,400));

const user= {
    userName : "John",
    price : 99999999999999999999999999999
}

function handleObject(anyUser){
    console.log(`User name is ${anyUser.userName} and price of car is ${anyUser.price}`);
}
handleObject(user);

//we can also do this 
function easyObject(anyUser){
    console.log(`User name is ${anyUser.userName} and price of car is ${anyUser.price}`);
}
easyObject({
    userName : "Nick Shan",
    price : 9000000000000
})


const userHero = ["Spiderman", 12345]

function handleArray(heroArr){
   return heroArr[0]   
 
}
// console.log(handleArray(userHero));
console.log([1000, 2000 , 3000]);
