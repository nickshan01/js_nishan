const user = {
    username: "Bardi",
    prise : 200,

welcomeMessage: function() {
    console.log(`${this.username}, welcome to our website`)
    console.log(this);
    } 

}
// user.welcomeMessage();
// console.log(user)

//  user.username = "Mohamed"
//  user.welcomeMessage();

// console.log(this);

function test() {
    let testername= "Ali";
    // console.log(this);
    console.log(this.testername);
};
test();


 chai = function() {
    let teamaker= "Dolly Chai ala";
    // console.log(this);
    console.log(this.teamaker);
 };
 chai();

kai = () => {
    let beakeeper= "Dolly Chai ala";
    // console.log(this);
    console.log(this.beakeeper);
 };


 //---------------------------------ARRO FUNCTION----------------------------------
// ()=>{}  is an arrow function 

// const addnum = (num1 , num2) => {
//     return num1 +num2
// }
// console.log(addnum(243,234))

const addnum = (num1 , num2) => {
    return num1 +num2
}
console.log(addnum(243,234))

