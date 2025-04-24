// Objects destructuring and JSON API:

const course = {
    courseName: "JS in Hindi",
    price: 99,
    courseLanguage: "Hindi",
    courseInstructor: "Hitesh Choudhary"
}

const {courseInstructor} = course;
console.log(courseInstructor);
const {courseInstructor: Tutor} = course; // sortening the name
console.log(Tutor);


// JSON Structure:
/*
{
    fullName: "Hitesh",
    courseName: "JS in Hindi",
    price: "free"
}
*/