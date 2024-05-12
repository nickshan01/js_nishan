for (let index = 0 ; index < 10 ; index++) {
    const element = index
        if (element === 5) {
            console.log("5 is best number");
        }
    
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }

}

const myArray = ["THOR", "IRONMAN", "SPIDERMAN"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}


// //-------------------------------------Break and Continue------------------------------
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 7) {
        console.log("detected 7");
        break;
    }
    console.log(`value of index is ${index}`);
}
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (index == 7) {
        console.log("detected 7");
        continue;
    }
    console.log(`value of index is ${index}`);
}
