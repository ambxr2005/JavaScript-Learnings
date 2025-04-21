const accountId = 1234567890;
let accountEmail = "aman@workoholiks.com";
var accountPassword = "@ditya@9812";
accountCity = "Delhi";
let accountState;

console.log(accountId);
// accountId = 12;
console.log(accountId); // This will throw an error because accountId is a constant and cannot be reassigned.
console.log(accountEmail);
accountEmail = "hc@hc.com";
console.log(accountEmail);

console.table([accountEmail, accountPassword, accountCity, accountId, accountState]);

// Prefer not to use var, use let and const instead
