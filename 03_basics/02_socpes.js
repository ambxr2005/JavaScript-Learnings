let x = 2500;
const PI = 3.14;


if (true) {
  let a = 10; // this is local level element
  const b = 5; // this is local level element
  var c = 30; // the scope of var is global

  console.log("INNER a:", a);
  console.log("INNER b:", b);
}

console.log(x);
console.log(PI);


// console.log(a); // error: undefined
// console.log(b); // error: undefined

console.log(c);


// ++++++++++++++++++++++ Nested Scopes ++++++++++++++++++++++++++

function one() {
  const user = "Aman";
  function two() {
    const website = "Youtube.com";
    console.log(user); // can access the outer element because it has the access of outer elements.
  };
  // console.log(website); // can't access the element because it doesn't have the access.
  // error will occur mentioned "website is undefined."
  two();
};

if (true) {
  const userName = "Hitesh";
  if (userName === "Hitesh") {
    const website = " youtube";
    console.log(userName + website);
  }
  // console.log(website); // out of scope element
}

// console.log(userName); // out of scope element

// +++++++++++++++++++++ Interesting ++++++++++++++++++++++

addOne(5);
function addOne(num) {
  console.log(`The successor of ${num} is:`, num + 1);
  console.log(`The successor of ${num} is: ${num + 1}`);
}

// addTwo(6); // this will throw an error such that expression cannot be called before its initialization.

const addTwo = function(num) {
  console.log(`The successor of ${num} is:`, num + 2);
  console.log(`The successor of ${num} is: ${num + 2}`);
}