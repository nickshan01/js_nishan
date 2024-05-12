const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (language) {
console.log(`I will master in  ${language}`);
})

const gaming = ["freefire", "GTA v"]
gaming.forEach( (gamename) => {
    console.log(gamename);
})
const superhero = ["Ironman","Spider-Man", "Thor", ]
function printme(name){
    console.log(name);
}

superhero.forEach(printme);

const person = ["ram", "shyam", "hari"]
person.forEach((name, index , person) => {
    console.log(name, index, person);
})


const myCoding = [
    {
        language: "javascript",
        fileName:"js"
    },
    {
        language: "Python",
        fileName:"py"
    },
    {
        language: "JAVA",
        fileName:"JAVA"
    }
]
myCoding.forEach((obj)=>{
    console.log(obj.fileName);
})
