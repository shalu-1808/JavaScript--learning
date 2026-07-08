const coding = ['javascript','ruby','python','java']

const value = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(value)  //  undefined because forEach loop never returns any value

const myNum = [ 1,2,3,4,5,6,7,8,9,10]

//--------------------------filter----------------------
const result = myNum.filter( (num) => {
    return num>4                         // implicit return because we are using scope means {}
})
console.log(result);

const result1 = myNum.filter( (num) => num>4)  // explicit return means need not to use return keyword because we don't use {}
console.log(result1);



// using forEach for the same problem
const myNums = []
myNums.forEach(() => {
    if(num > 4){
        newNums.push(num)
        
    }
})
console.log(myNums);

const books = [
    {title : 'book one', genre: 'fiction', publishYear: 1981, edition: 2004},

    {title : 'book two', genre: 'non-fiction', publishYear: 1984, edition: 2003},

    {title : 'book three', genre: 'history', publishYear: 1987, edition: 2004},

    {title : 'book four', genre: 'fiction', publishYear: 1989, edition: 2006},

    {title : 'book five', genre: 'non-fiction', publishYear: 1991, edition: 2000},

    {title : 'book six', genre: 'history', publishYear: 1995, edition: 2005},

    {title : 'book seven', genre: 'fiction', publishYear: 1998, edition: 2008},

    {title : 'book eight', genre: 'non-fiction', publishYear: 1999, edition: 2003},

    {title : 'book nine', genre: 'history', publishYear: 1971, edition: 2005},

    {title : 'book ten', genre: 'fiction', publishYear: 2002, edition: 2006},
]
let userBooks = books.filter( (bk) => bk.genre === "history" )
userBooks = books.filter( (bk) => { return bk.publishYear >= 2000 } )
console.log(userBooks);


//---------------------------------reduce method----------------------------

const myNum1 = [1,2,3]
const myTotal = myNum1.reduce( function(acc,currval)
 {
    console.log(`acc ${acc} and currval ${currval}`);
    
    return acc + currval
} , 0)

console.log(myTotal);