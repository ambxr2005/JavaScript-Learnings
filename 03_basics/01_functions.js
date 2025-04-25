function sayMyName(params) {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

sayMyName();

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;

    return result;
}

const res1 = addTwoNumbers(5, 8);

console.log("The result is:", res1);

function loginUserType1(userName) {
    if (userName === undefined) {
        console.log("Please enter a username!");
        return;
    }
    return `Hello ${userName}, Just logged in!`;
}


console.log(loginUserType1("Aman Kumar"));

function loginUserType2(userName) {
    if (userName === undefined) {
        console.log("Please enter a username!");
        return;
    } else {
        console.log(`Hello ${userName}, Just logged in!`);
    }
}

loginUserType1("Aman Kumar");

// Cart value calculator
function calculateCartPrice(...num1) { // use of rest operator
    return num1;
}

console.log(calculateCartPrice(200, 349, 500, 2000));

const user = {
    userName: "hitesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and the price is ${anyObject.price}.`);
}

handleObject(user);

handleObject({
    userName: "Amaan",
    price: 299
})

const myArray = [200,400, 600, 100];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myArray));