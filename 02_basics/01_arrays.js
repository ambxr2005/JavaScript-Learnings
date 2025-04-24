// arrays

const myArray = [0, 1, 2, "Hitesh", 3, 4, true, 5, false, 6];
const myArr = new Array(1, 2, "Aman", false);

console.log(myArray[3]);
console.log(myArr[1]);

myArr.push(6);
console.log(myArr);
myArr.push("Hitesh sir is great!");
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9); // adds the data to the very starting.
console.log(myArr);

myArr.shift(); // removes the data at the very starting.
console.log(myArr);

console.log(myArr.includes(2));
console.log(myArr.indexOf(2));

const newArr = myArr.join(); // converts the array elements into strings
console.log(myArr);
console.log(newArr);
console.log(typeof(myArr));
console.log(typeof(newArr));

// slice, splice

console.log("A " + newArr);

const mna1 = myArr.slice(1, 3);
console.log(mna1);

console.log("B " + newArr);

const mna2 = myArr.splice(1, 3);
console.log(mna2);