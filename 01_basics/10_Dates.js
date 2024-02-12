let currentDate = new Date()
console.log(currentDate.toString());
console.log(currentDate.toDateString());
console.log(currentDate.toISOString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toJSON());
console.log(currentDate.toLocaleTimeString());
console.log(currentDate.toTimeString());
console.log(currentDate.toString());
console.log(currentDate.toUTCString());
console.log(currentDate.getTimezoneOffset());


let myTime = new Date(2009, 0, 1 )
console.log(myTime.toDateString());

let myTmeIs = new Date(2009, 1, 1, 8, 30, 30)
console.log(myTmeIs.toLocaleString());

let time = new Date("01-28-2009")
 console.log(time.toLocaleString());

 let tme = new Date("2009-01-28")
 console.log(tme.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now() / 1000));

let someDate = new Date()
console.log(someDate.getDay());//to find day 
console.log(someDate.getHours());//to find hours

console.log(`the year is ${someDate.getFullYear()} and the month is ${someDate.getMonth()}`)



someDate.toLocaleString('default',{
   
    weekday: "long",
    year: 'numeric'
})
console.log(someDate);