let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

let myCreatedDate = new Date("06-06-2026");
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toTimeString());
console.log(myCreatedDate.toLocaleTimeString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());


console.log(myDate.getFullYear());
console.log(myDate.getMonth() + 1);
console.log(myDate.getDate());

let newDate = new Date();
newDate.toLocaleString('default',
     {
        weekday : "long"
      })
      console.log(newDate);