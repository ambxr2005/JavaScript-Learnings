// ++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++

function chai() {
    let userName = "hitesh";
    console.log(this);
    console.log(this.userName); // cannot use this keyword in functions to refer to the variables.
}

chai();

const chaiWala = function() {
    let userName = "Aman";
    console.log(this.userName); // Same goes here also.
}

chaiWala();

const chaiLelo = () => { // example of arrrow function
    let userName = "Aman";
    console.log(this.userName); // Same goes here also.
    console.log(this);
}

chaiLelo();

// Basic syntax of arrow function:
const addTwo = (num1, num2) => {
    return num1 + num2;
}
// implicit return
const addThree = (num1, num2, num3) => (num1 + num2 + num3); // used in react js

const useapp = (n1, n2) => ({userName: "Aman"}); 

console.log(`The sum is: ${addTwo(2, 6)}`);
console.log(`The sum is: ${addThree(2, 6, 2)}`);

console.log(useapp());

const arr1 = [2, 5, 3, 7, 8];

arr1.forEach(function () {});
arr1.forEach(() => {});