// function 

function sayMyName() {
    console.log('s');
    console.log('h');
    console.log('a');
    console.log('l');
    console.log('u');  
}                      // function declaration
 //sayMyName(); // function call

 function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
 } // function declaration

 //addTwoNumbers(8,9); // function call with arguments
 //addTwoNumbers(9,"6");

 //const result = addTwoNumbers(8,9);
 //console.log(result); // undefined because the function does not return anything

 // using return keyword
 function addTwoNumbers1(num1,num2){
    return num1 + num2;           // function declaration. it will return directly. after return there will no console log will execute.
 }
  //let results = addTwoNumbers1(5,10);
  //console.log(results);

  function userLoggedIn(username){
    if(!username){
        return "enter username:";
    }
    return `${username} has logged in`;
  }
  //console.log(userLoggedIn("Shalu"));
  //console.log(userLoggedIn()); // gives undefined 

  // using rest operator in function
  function calculateCartPrice(...num1){ // rest operator(...)
    return num1;
  }
  console.log(calculateCartPrice(222,564,400));

  const user = {
    username: 'Shalu',
    price: 3000
  }

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

// using Array in function
const myNewArray = [200,500,400]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray)); 