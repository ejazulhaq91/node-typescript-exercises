import {titleCase} from "title-case";

let studentName = "Hamdaan khan"

// Upper Case
console.log(studentName.toUpperCase())

// Lower Case
console.log(studentName.toLowerCase())

// Title Case
const titledName = studentName.split(" ").map((name: string) => name[0].toUpperCase() + name.substr(1)).join(" ")
console.log(titledName)






export{}