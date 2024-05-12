const userEmail = ""
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("User have no email");
}

// falsy  values: undefined, null, false, 0, -0, BigInt 0n, "", NaN

// truthy values: "0", 'false', " ", [], {}, function(){}, 

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// console.log(false == 0); // true
// console.log(0 == '') // true
// console.log(false == 0) // true 

