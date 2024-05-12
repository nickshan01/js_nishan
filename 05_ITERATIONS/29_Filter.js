const coding = ["js", "ruby", "java", "python", "cpp"]

const value = coding.forEach((language) => {
    console.log(language);
    //return language;
})
console.log(value);         //For each does not return anything


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNums.filter(( num ) => num > 4)
// console.log(myNums);
console.log(newNum);

const myValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newValue = myValue.filter(( num ) => {
    return num <= 5})
// console.log(myNums);
console.log(newValue);





const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   console.log(books);
  let newBooks = books.filter(( bk ) => bk.genre==='Science')
  console.log(newBooks);

newBooks = books.filter(( bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
})
console.log(newBooks);
