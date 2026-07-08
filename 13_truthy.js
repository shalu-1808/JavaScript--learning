const userEmail = []
if(userEmail){
    console.log("got an email");
    
} else{
    console.log("have not an email");
    
}

// falsy value

// false, 0, -0, null, undefined, BigInt 0n, NaN, ""

//truthy values
// "0", 'false', {}, [], " ", function() {}

if(userEmail.length === 0){
    console.log("Object is empty");
    
}

const emptyObj ={}   //object
if(Object.keys(emptyObj).length === 0){
    console.log("Array is empty");
    
}


//Nullish Coalescing operator(??) : null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 17
val1 = undefined ?? 26
console.log(val1);


let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
