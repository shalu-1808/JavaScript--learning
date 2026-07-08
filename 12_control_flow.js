//IF
const temperature = 41
if(temperature < 50){
  console.log("temp is less than 50")
} else{
    console.log("temp is more than 50")
}
console.log("execute")


const score = 200
if(score >100){
    let power = "fly"
    console.log(`power: ${power}`)
}
//console.log(`power: ${power}`)  // you can't access locAL scope value outside of that scope.

const balance = 1000
if(balance > 500) console.log("test"); // implicit scope

const userloggedIn = true
const debitCard = true
const userloggedInFromGoogle = true
const userloggedInFromGmail = true

if(userloggedIn && debitCard){
    console.log("Successfully login")
}
else if(userloggedInFromGoogle || userloggedInFromGmail){
    console.log("Successfuly login")
}else{
    console.log("wrong credential")
}

//------------------------------------SWITCH------------------------------

const month = 3

switch(month){
    case 1: 
    console.log("January");
    break;
    case 2: 
    console.log("February");
    break;
    case 3: 
    console.log("March");
    break;
    case 4: 
    console.log("April");
    break;

    default:
        console.log("default case match");
        break;
        
    
}

const months = "march"  // for string
switch(months){
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
      default:
        console.log("default");
         break; 
}
