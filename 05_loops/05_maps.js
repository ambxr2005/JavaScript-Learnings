// Refer from MDN

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2

const map2 = new Map();

map2.set('IN', "India");
map2.set('USA', "United States of America");
map2.set('FR', "France");
map2.set('IN', "India");  // cannot repeat values

console.log(map2);

for (const keys of map2) {
    console.log(keys);
}
for (const [keys, values] of map2) {
    console.log(keys, ':-', values);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'BGMI',
    'game3': 'Spiderman'
}

// for (const element of myObject) {
//     console.log(element);
// } // object is not iterable

