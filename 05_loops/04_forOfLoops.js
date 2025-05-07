// Specialized for Arrays.
// forof

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    console.log(element);
}

const greetings = "Hello";

for (const each of greetings) {
    console.log(`Each letter of greeting is: ${each}`);
}