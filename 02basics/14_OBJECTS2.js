// const tender = new ojects()

const tenderuser = {}

tenderuser.name = "Nick Shan"
tenderuser.email = "NickShan@gmail.com"
tenderuser.userId = "1232asd"
tenderuser.isLoggedIn = false 


console.log(tenderuser);

const dailyUser = {
    Fullname : {
    userFullName : {
        Firstname : "John",
        Lastname : "Doe"
    }
    }
}

console.log(dailyUser);
console.log(dailyUser.Fullname.userFullName)



const target = {
    1:"a",
    2:"b"
}
console.log(target);

const resource = {
    3:"c",
    4:"d"
}
console.log(resource);

// returnTarget = {target , resourse}

const returnTarget = {...target, ...resource}// we should prefer it  over Object.assign() because of the spread operator
// const returnTarget =Object.assign({},target,resource) 

// array of objects 

const villagers =  [
    {
        name: "Ramu",
    },
    {
        name: "shyam",
    },
    {
        name: "sita",
    },
    {
        name: "Ram",
    },
    {
        name: "shyam",
    },
]
villagers[1].age=56
console.log(villagers);



console.log(Object.keys(tenderuser));
console.log(Object.values(tenderuser));
console.log(Object.entries(tenderuser));
console.log(tenderuser.hasOwnProperty("email"));


