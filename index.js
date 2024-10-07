// const userOne = {
//     firstName: "Bog",
//     age: 27,
//     admin: false
// }
// userOne.age=30
// console.log(userOne)

// const sports = ["tennis", "golf", "volleyball"]
// sports.push("soccer")
// console.log(sports)
// const foundsports= sports.indexOf("golf")

// console.log(foundsports)

const student = {
    Name: "Marie",
    age: 20,
    courses: []
}

student.age=21
student["grade"] = "A";
student.courses.push("Math", "Physics", "Chemistry");
console.log(student)

const findcourse= student.courses.indexOf("Physics")
console.log(findcourse)

const firstTwoCourses = student.courses.slice(0, 2);
console.log(firstTwoCourses);