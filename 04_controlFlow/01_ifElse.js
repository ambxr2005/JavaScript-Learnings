// if statements

const isUserLogedIn = true;
if (isUserLogedIn) {
  console.log("Hello, user!");
}

if (2 < 1) {
  console.log("The condition is true.");
} else {
  console.log("The condition is false.");
}

const temp = 42;

if (temp < 50) {
  console.log("less than 50");
} else {
  console.log("Temperature is greater than 50");
}

const score = 200;

if (score > 200) {
  const power = "fly";
  console.log(`User Power: ${power}`);
}

// console.log(`User Power: ${power}`); // scope is not allowed after part.

// else if ladder
const balance = 2000;

if (balance >= 1000) {
  console.log("Monthly Average Balance is maintained!");
} else if (balance < 1000) {
  console.log("Maintain MAB to avoid charges!");
}