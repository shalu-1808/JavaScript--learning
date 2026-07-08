// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 8){ 
        console.log("8 is best number");
    }
    
    console.log(element);
    
} // console.log(element); not accessible outside

 for(let i = 0; i <10 ; i++){
    console.log(`this is outer loop ${i}`);
    for(let j = 0 ; j<=10; j++){
       // console.log(`this is inner loop ${j}`);
        console.log(i + " * " + j + " = " + i*j);
        
    }
 } 


 let myArray = ["batman", "superman", "shaktiman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
    }

    // while loop 

    let i = 0;
    while (i <= 10) {
       console.log(`value of i is ${i}`);
        i = i +2;
    }

    // do while loop
    let k = 1;
    do {
      console.log(`k is ${k}`);
       k++;
    } while (k<=10);


    // for of loop
     const arr = [1,2,3,4,5]
    for (const num of arr) {
        console.log(num);
        
    }

    const greeting = "Hello World"
    for (const greet of greeting) {
        console.log(`each  char of greeting is ${greet}`);
        
    }