myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map(( num ) => num *2 )
console.log(newNums);


myVal = [1, ,2, 3, 4, 5, 6, 7, 8, 9, 10]
const newVal = myVal
            .map((val) => val*10)
            .map((val) => val + 1)
            .filter((value) => {return value >= 60})
            console.log(newVal);
