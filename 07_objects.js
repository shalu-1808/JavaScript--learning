const tinderUser = new Object(); // object constructor syntax. it is Singleton object.

console.log(tinderUser); // this will return an empty object because no properties have been added to it yet

const tinderUser2 = {}; // object literal syntax
tinderUser2.id = '123abc';
tinderUser2.name = 'Shalu';
tinderUser2.isLoggedIn = false;
console.log(tinderUser2); // this will also return an empty object because no properties have been added to it yet

const regularUser = {
    email: 'regular@example.com',
    fullname: {
        userfullname:{
            firstname: 'Shalu',
            lastname: 'Singh',
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // to access the nested object properties we can use dot notation

const obj1 = {1: 'a', 2: 'b', 3: 'c'}; // object with numeric keys
const obj2 = {1: 'a', 2: 'b', 3: 'c'}; // object with numeric keys

const obj3 = Object.assign({}, obj1, obj2); // combines properties from obj1 and obj2 into obj3
console.log(obj3); // this will log the combined object

const obj4 = {...obj1, ...obj2}; // using spread operator to combine properties from obj1 and obj2 into obj4
console.log("2",obj4); // this will log the combined object

const users = [
    {
        id: '1',
        email: 'user1@example.com',
        fullname: {
            firstname: 'John',
            lastname: 'Doe'
        }
    },
    {
        id: '2',
        email: 'user2@example.com',
        fullname: {
            firstname: 'Jane',
            lastname: 'Doe'
        }
    }
]  // array of objects

users[1].email

console.log(Object.keys(tinderUser2)); // this will return an array of the keys of the object
console.log(Object.values(tinderUser2)); // this will return an array of the values of the object
console.log(Object.entries(tinderUser2)); // this will return an array of the key-value pairs of the object

// Destructuring objects
const course = {
    courseName: 'JavaScript',
    price: 999,
    courseInstructor: 'Shalu Singh',
    courseDescription: 'This is a JavaScript course'
}

course.courseName; // accessing the property using dot notation
const {courseName: name, price, courseInstructor, courseDescription} = course; // destructuring the object
console.log(name, price, courseInstructor, courseDescription); // this will log the destructured values
console.log(course); // this will log the original object
console.log(courseInstructor); // this will log the value of the courseInstructor property
console.log(name); // this will log the value of the courseName property which is now stored in the variable name