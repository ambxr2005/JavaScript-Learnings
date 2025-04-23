// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);
console.log(id === anotherId);

const bigNumber = 31245427385646353432546357469646354352643321n;

console.log(bigNumber);

// Reference/Non-Primitive

// Arrays
// Objects
// Functions

const heros = ["Aditya", "Amritanshu", "Prashant"]; // Array
let myObj = {
    name: "Aman",
    age: 20
}; // Object

console.log(heros);
console.log(myObj);

const myFunction = function () {
    console.log("Hello Ansh");
} // Function

console.log(typeof(myFunction));

// +++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++

// 1. Stack (Primitive)
let myYouTubeName = "hiteshchoudhary.com";

let anotherName = myYouTubeName;
console.log(anotherName);
console.log(myYouTubeName);

anotherName = "chaiaurcode";
console.log(anotherName);
console.log(myYouTubeName);

// 2. Heap (Non-Primitive)
let userOne = {
    email: "user@google.com",
    upi: "user@upi",
}

let userTwo = userOne;
console.log(userOne);
console.log(userTwo);

userTwo.upi = "usertwo@apl";
console.log(userOne);
console.log(userTwo);