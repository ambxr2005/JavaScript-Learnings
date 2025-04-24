const tinder = new Object();
const tinderUser = {};

console.log(tinder);
console.log(tinderUser);

tinderUser.id = "ambxr2005";
tinderUser.name = "Aman Kumar";
tinderUser.mailId = "ambxr2005+tinder@gmail.com";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    emailId: "some@tinder.com",
    fullName: {
        userFullName: {
            firstName: "Hitesh",
            lastName: "Choudhary"
        }
    }
}

console.log(regularUser);
console.log(regularUser.emailId);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName);

// console.log(regularUser.fullName(userFullName)); // Not the correct way to access the inner objects of an object!


// ----------------- Merging of objects -----------------

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = Object.assign({}, obj1, obj2); // assign operator used to merge two objects.

const obj4 = {...obj1, ...obj2}; // another way to merge two objects.
console.log(obj3);
console.log(obj4);

// Objects in arrays: (used to fetch data form databases)

const arr1 = [
    {
        id: "abd@dass.com",
        userId: 12345
    },
    {
        id: "abce@dass.com",
        userId: 16324
    }
]

console.log(arr1[1]);
console.log(arr1[0]);

// to print the keys:
console.log(Object.keys(arr1));
console.log(Object.values(arr1));
console.log(Object.entries(arr1));
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// to check if a property is contained or not:
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isOn"));

