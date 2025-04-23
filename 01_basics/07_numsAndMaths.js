const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);
console.log(typeof balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++++++ Maths +++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.56));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(3, 1, 5, 54, 0.1));
console.log(Math.max(3, 1, 5, 54, 0.1));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + 10);