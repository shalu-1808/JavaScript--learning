//Singleton pattern
//Object.create constructs a new object with the specified prototype object and properties. It is used to create a new object that inherits from an existing object.

// object literal

const mySym = Symbol("key1");
const JsUser = {
    name: 'Shalu',
    "full name": 'Shalu Singh',
    mySym: 'myKey1', // this is a string key
    [mySym]: 'myKey1', // this is a symbol key
    age: 18,
    email: 'shalu@google.com',
    isLoggedIn: false,
    location: 'Delhi',
    lastLoginDays: ['Monday', 'Friday'],
}

console.log(JsUser.email);
console.log(JsUser['email']); // to access the key name with dot notation or bracket notation
console.log(JsUser['full name']); // to access double quotes are used because of space in the key name. we can not access it with dot notation

console.log(JsUser.mySym); // this will return the string key value
console.log(JsUser[mySym]); // this will return the symbol key value

JsUser.email = 'Shalu@email.com'; // to update the value of a key
//Object.freeze(JsUser); // to freeze the object so that no changes can be made to it
JsUser.email = 'Shalu@gemini.com'; // this will not update the value of the key because the object is frozen

//console.log(JsUser);

JsUser.greeting = function() { // adding a method to the object
    console.log('Hello');
}

console.log(JsUser.greeting()); // calling the method of the object

JsUser.greeting2 = function() { // adding another method to the object
    console.log(`Hello ${this.name}`); // this keyword is used to access the properties of the object
}
console.log(JsUser.greeting2()); // calling the second method of the object