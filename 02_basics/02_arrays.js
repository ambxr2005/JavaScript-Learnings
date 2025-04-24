const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros); // results array inside array.
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros); // adds both the arrays.
console.log(all_heros);

const allNewHeros  = [...marvel_heros, ...dc_heros]; // spread operator: does the same as the concat operator, but for multiple arrays
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

let myRealAnotherArray = anotherArray.flat(Infinity);

console.log(myRealAnotherArray);

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// do revisit the operators such as is, from, of, etc.