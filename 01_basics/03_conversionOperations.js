let score = 23;
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let somNumber = 33;
let stringNumber = String(somNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

let isLogged1 = "";
let isLogged2 = "Yes";

let booleanIsLogged1 = Boolean(isLogged1);
let booleanIsLogged2 = Boolean(isLogged2);

console.log(booleanIsLogged1);
console.log(booleanIsLogged2);

// 1 => true; 2 => false
// "" => false
// "Aman" => true

// ******************** Operations ********************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 2);

let str1 = "Ritesh";
let str2 = " Kumar";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + "2");
console.log(1 + 2 + "2");
console.log(1 + "2" + 4);

console.log(((3 + 4) * 4) % 5);

console.log(true);
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
console.log("Before increment: " + gameCounter);
gameCounter++;
console.log("After increment: " + gameCounter);

// Refer Increment and Decrement from MDN documentation.
