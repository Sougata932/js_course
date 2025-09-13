const course = {
    name: "JS Course",
    price: "999",
    courseInstructor: "Hitesh"
}
console.log(course.courseInstructor);

const{courseInstructor: instructor}=course; //destructuring and also changing the variable name
console.log(instructor); //we can use this variable name outside


