const readlineSync = require("readline-sync");

let min = Number (readlineSync.question("Enter a min Number ?"));
let max = Number (readlineSync.question("Enter a max Number ?"));
let current = Number (readlineSync.question("Enter a current Number ?"));

if (current > min && current < max) {
    console.log("it's ok");
}
if (min > max) {
    console.error("you have entered a max number greater then min number");
}