// ++++++++++++++++++++++ Dates ++++++++++++++++++++++

let myDate = new Date();

console.log(myDate);
console.log(typeof(myDate));
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2025, 11, 25);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date("2025-04-24");
console.log(myCreatedDate1.toLocaleDateString());

let myTimeStamp = Date.now(); // Date in miliseconds

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(myDate);
console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());
console.log(myDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "short",
}));
