const readlineSync = require("readline-sync");

let Number1 = new Number(readlineSync.question('Please give two digit numbers?'));
let Number2 = new Number(readlineSync.question('Please give two digit numbers?'));
console.log("the rest is" + " " + Number1 % Number2); 