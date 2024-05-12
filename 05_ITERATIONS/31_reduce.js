const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);
const myVal = [1, 2, 3]

const initilValue = 0;
const sumWithinitialValue = myNums.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
initilValue
)
console.log(sumWithinitialValue);

const shoppingCart = [
    {
        courses : "js",
        prize : 100
    },
    {
        courses : "py",
        prize : 300
    },
    {
        courses : "mobile devlopment ",
        prize : 1600
    },
    {
        courses : "ruby",
        prize : 1070
    }
]
const totalMoneyToPay = shoppingCart.reduce((acc , item)=> {
    return acc + item.prize 
}, 0)
console.log(totalMoneyToPay);
