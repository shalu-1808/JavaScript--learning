const m_heros = ['thor', 'ironman', 'hulk', 'captain america', 'black widow', 'hawkeye'];
const dc_heros = ['superman', 'batman', 'wonder woman'];
 
//m_heros.push(dc_heros);

//console.log(m_heros);
//console.log(m_heros[6][1]);

//m_heros.concat(dc_heros);
//console.log(m_heros);

const all_heros = m_heros.concat(dc_heros); // concat method is used to merge two arrays
console.log(all_heros);

const all_new_heros = [...m_heros, ...dc_heros]; // spread operator is used to merge two arrays
console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6],7,[6,7,8,[9,10]]] // nested array
const real_array = another_array.flat(2); // flat method is used to flatten the array, it takes the depth as an argument
console.log(real_array);

console.log(Array.isArray('Shalu')); // asking if it is an array or not
console.log(Array.from('Shalu')); // converting string to array
console.log(Array.from({name:'Shalu'})); // always returns an empty array because it is not iterable

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Array.of() method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.
