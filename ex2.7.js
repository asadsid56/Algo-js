const readlineSync = require("readline-sync");

let num = Number (readlineSync.question(" Please enter a Number"));
let sum = 0; 
for (let i = 0; i < num; i++) {
     let x = Number (readlineSync.question(" Please enter a Number"));
     sum += x; 
}
console.log(sum); 
