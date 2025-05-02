// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log("DB Connected!");
})(); // named iife

( (userName) => {
    console.log(`DB Two Connected! for ${userName}`);
})("Aman Kumar"); // simple iife

// Always keep in mind to terminate each bock of code after end by semicolon(;).

