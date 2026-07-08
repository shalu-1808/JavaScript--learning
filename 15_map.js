//map
const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")
console.log(map);
console.log(Map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

const myObject = {
    'js': "javascript",
    'cpp': "c++",
    'py': "python",
    'rb': "ruby"
}
for (const key in myObject) { // for in loop for object
   
    console.log(key);
    console.log(`${key} is shorcut for ${myObject[key]}`);
    
}

const programming = ["rb",'py','c++','java','c']
for (const key in programming) {
   
    console.log(programming[key])
    
}

// for each loop

const coding = ['apple','banana','cherry','grape']
//coding.forEach(function (val){                        //for each loop on array using callback function.
    //console.log(val);
    
//})

//coding.forEach((item) => {    // using arrow function in callback
       // console.log(item);
        
//})

function printMe(item){
    //console.log(item);
    
}

//coding.forEach(printMe)  // writing function outside of for each loop and simply calling it into for each

coding.forEach((item,val,key) => {
    console.log(item,val,key);
    
})

const myCoding = [{                   // object in array
    languageName : 'javaScript',
    languageFileName : 'js'
},
{
    languageName : 'java',
    languageFileName : 'java'
},
{
    languageName : 'python',
    languageFileName : 'py'
},

]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNumbers.map((num) => num + 10)
console.log(newNum);

//--------------------------Chaining---------------------
const myNumbers1 = [1,2,3,4,5,6,7,8,9,10]
const newNum1 = myNumbers1.map( (num) => num*10 ).map( (num) => num + 1).filter((num) => num >= 40)
console.log(newNum1);
