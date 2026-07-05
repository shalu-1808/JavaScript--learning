// Imediately Invoked Function Expression(IIFE)
/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that executes immediately after it is defined.

Syntax:

(function () {
    console.log("Hello");
})();

// Arrow Function IIFE
(() => {
    console.log("Hello");
})();

Uses:

Prevents global scope pollution.
Creates a private/local scope for variables.
Executes initialization code only once.

Key Point:
An IIFE is wrapped in () to make it a function expression, and the second () immediately invokes (calls) the function.

Interview Definition (One Line):

An IIFE is a function expression that runs immediately after it is created, mainly used to avoid global scope pollution and create a private scope.*/

(function sh() {
    console.log(`DB Connected`)
}) ();  //IIFE , USE OF ; IS Neccessary here because second function will not run because it will not be able to assume that where to stope the code.

( function alu(){
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log(`DB CONNECTED`)  // arrow function
})();


( (name) => {
    console.log(`DB CONNECTED to ${name}`)  // arrow function
})('Shalu')