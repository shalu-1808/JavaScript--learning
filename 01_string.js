const name = "Shalu";
const repoCount = 50;
console.log(`Hello my name is ${name} and I have ${repoCount} repositories`);

const gameName =  new String('Shalu');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName. toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('l'));


const newString = gameName.substring(0, 3);
console.log(newString);

const anotherString = gameName.slice(-4, -1);
console.log(anotherString);

const newString1 = "    Shalu     ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.shalu.com/shalu%20singh";
console.log(url.replace("%20", "-"));