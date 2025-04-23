const name1 = "Hitesh";
const repoCount = 50;

console.log(name1 + repoCount + " value");  // Not recomended

console.log(`Hello, my name is ${name1}, and my repo count is ${repoCount}.`);  // String Interpolation

const gameName = new String('Hitesh-HC');

console.log(gameName);
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newName = gameName.substring(0, 4);
console.log(newName);

const anotherName = gameName.slice(-8, 4);
console.log(anotherName);

let newStringOne = "  Hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dashsteam.com/Contact%20Us";
console.log(url);
console.log(url.replace("%20", ""));

console.log(gameName.includes("HC"));

console.log(gameName.split(" "));
