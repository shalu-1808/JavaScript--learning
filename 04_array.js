const myArr = [1,2,3,4,5];
const myHeros = ["arthur", "bruce", "clark", "diana", "barry"];

const myArr2 = new Array(6,7,8,9,10);
console.log(myArr[0]);
console.log(myArr2[2]);
console.log(myHeros[1]);

// Array Methods

myArr.push(6);
myArr.push(7);
myArr.pop();

myArr.unshift(8);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));

const newArr = myArr.join();
console.log(newArr);

console.log("A", myArr);
const myArr3 = myArr.splice(1,3);
console.log(myArr3);
console.log("B", myArr);
console.log("C", myArr3);