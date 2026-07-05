const user = {
    username: 'Shalu',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this keyword refers to the object that is executing current function.
        console.log(this); // it is treated as console.log(user), that object , because it is inside an object.
    }
}
user.welcomeMessage()

user.username="Sam";  //context changed
user.welcomeMessage()

console.log(this);  // global object gives {}


// this keyword using in function
function chai(){
    let username = "shalu";
    console.log(this.username);
}
chai()  // give undefined because this keyword works only inside an object not in function.

/*const chai = function(){
    let username = "shalu"
    console.log(this.username);
}
chai() */ // undefined

//-------------------------------Arrow Function--------------------------------

const chai1 = () => {
    let username = "Shalu"
    console.log(this.username)  // this will also give undefined
    console.log(this) // this will give {}
}
chai1()

// () => {}   basic arrow function 

const addTwo = (num1, num2) => {
    return num1+num2
}
console.log(addTwo(5,7))  // this is how arrow function works.

//-------------------------Implicit Return in arrow function ---------------------------------

const addTwo2 = (num1, num2) =>  num1+num2 // in implicit return their is no need to write return, it will simply give output.
console.log(addTwo2(8,5))

const addTwo3 = (num1,num2) => ({username: "SHALU"}) // we use paranthesis for object so that it will return object otherwise not.
console.log(addTwo3(5,6))