const userMail = "hitesh@aman.com";

if (userMail) {
    console.log("Got the user Email!");
} else {
    console.log("Don't have user Email.");
}

// flsy value:
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// all others are true values:
// Example: "0", 'false', " ", [], {}, function()[]

let userName = "";

if (userName.length == 0) {
    console.log("User name is empty!");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1);

