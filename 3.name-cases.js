"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentName = "Hamdaan khan";
// Upper Case
console.log(studentName.toUpperCase());
// Lower Case
console.log(studentName.toLowerCase());
// Title Case
var titledName = studentName.split(" ").map(function (name) { return name[0].toUpperCase() + name.substr(1); }).join(" ");
console.log(titledName);
