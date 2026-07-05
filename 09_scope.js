// Scope 
let a = 10;   // local scoped
const b = 20; // local scoped
var c = 30; // global scoped

console.log(a,b,c);


function one(){
    const username = "Shalu"

    function two(){
        const channel = "youtube"
        console.log(username);
    }
   // console.log(channel);   //:: this will give error because channel is local scopped and we can'nt access local scope function outside of it.

    two()
}
one()


if(true){
    const username = "Shalu"
    if(username === "Shalu"){
        const website = "youtube"
        console.log( username+" " + website);
    }
   // console.log(website); // error
}
 //console.log(username); // error 


 //----------------------------00-------------------------
console.log(addone(5));
 function addone(num){
    return num +1 ;
 }

 
// addtwo(6) :-  can not access addtwo before initializationm.
 const  addtwo = function addone(num){
       return num +2;
 }

 addtwo(6)