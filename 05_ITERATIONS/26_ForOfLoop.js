const arr =[1, 2, 3, 4,]

for (const iterator of arr) {
    console.log(iterator);
}

const greetings = "hello world "
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}




const map = new Map()

map.set('NP', "Nepal")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);

for (const [key, value] of map) {
   console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
