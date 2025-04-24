// singleton 
// Object.create  : through Constructor method

const mySym = Symbol("key 1");


// object literals
const user = {
    fullName: "Hitesh",
    [mySym]: "Mykey1",
    "full name": "Hitesh Chaoudhary",
    age: 38,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false
};

console.log(user.email);
console.log(user["email"]);
// same same but different.

console.log(user["full name"]);
console.log(user[mySym]);

user.email = "hitesh@chatgpt.com";
// Object.freeze(user); // no further modifications to the object user.
user.age = 34; // unable to modify.
console.log(user);

user.greeting = function() {
    console.log(`Hello ${user.fullName}!`);
}

user.greeting(); // need not to console the function to work.