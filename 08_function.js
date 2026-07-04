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

 addTwoNumbers(8,9); // function call with arguments
 addTwoNumbers(9,"6");

 const result = addTwoNumbers(8,9);
 console.log(result); // undefined because the function does not return anything

 // using return keyword
 function addTwoNumbers1(num1,num2){
    return num1 + num2;           // function declaration. it will return directly. after return there will no console log will execute.
 }
  let results = addTwoNumbers1(5,10);
  console.log(results);

  function userLoggedIn(username){
    if(!username){
        return "enter username:";
    }
    return `${username} has logged in`;
  }
  console.log(userLoggedIn("Shalu"));
  console.log(userLoggedIn()); // gives undefined 