const readlineSync = require("readline-sync");


let Number1 = new Number(readlineSync.question('Please give first decimal number?'));
let Number2 = new Number(readlineSync.question('Please give second decimal number?'));
console.log("we will store first Number" + " " + (Math.trunc(Number1))); 

