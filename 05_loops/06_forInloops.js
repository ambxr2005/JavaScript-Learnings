const myObject = {
    js: 'NFS',
    cpp: 'BGMI',
    java: 'Spiderman'
};


for (const key in myObject) {
    console.log(`${key} sortcut is for ${myObject[key]}.`);
}

const programming = ["JS", "Java", "C++", "C"];

for (const key in programming) {
    console.log(programming[key]);
}