for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log(element);
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value: ${j}`);
    }
}

const array = ["Aman", "Suryansh", "Anurag", "Samar"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

// break and continue

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        console.log("5 is Detected!");
        break;
    }
    console.log(`The value is: ${index}`);
}