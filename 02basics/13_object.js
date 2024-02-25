// OBJECTS LITERALS

 mySym = Symbol("MyType");
const myProfile = {
    name : "Nick Shan",
    age :15,
    isLoggedIn: false,
    Location :"Nepal",
    Email :"nickshan000@gmail.com",
    lastLoggedInSDay : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    [mySym] : "MyType"
}


 myProfile.Location = "Nepal,Jumla"
 myProfile.lastLoggedInSDay.push("january")



 console.log(myProfile.Email);
console.log(myProfile.lastLoggedInSDay);
console.log(myProfile[mySym]); //this is better way than console.log(myProfile.Email);
console.log(myProfile["Email"]);////this is better way than console.log(myProfile.Email);
console.log(myProfile["Location"]);
console.log(Object.keys(myProfile)); // you can use a function that returns those property names.



console.log(myProfile);
myProfile.welcomeBeginners = function() {
    console.log("Welcome to javascript");
}
console.log(myProfile.welcomeBeginners());

myProfile.welcomeBeginnersAgain = function() {
    console.log(`Welcome to javascript, ${this.email}`);
}
console.log(myProfile.welcomeBeginnersAgain());



 Object.freeze(myProfile) ;  //  its values cannot be changed once it's created
 //trying to change the value of any property will result in error
 myProfile.age=20
 console.log(myProfile.age);

