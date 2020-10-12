const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("What is your shoe size ?");
console.log("my shoe size is" + " " + shoeSize);
let sizeResult = (shoeSize * 2);
console.log(sizeResult);
let add = (sizeResult + 5);
console.log(add);
let multiply = (add * 50);
console.log(multiply);
let birthdayYear = readlineSync.question("What is your bithday year ?");
console.log(typeof(birthdayYear))
console.log("my birthday year is" + " " + birthdayYear);
let subtract = (parseInt(birthdayYear) - 1000); 
console.log(subtract);
let addYear = (parseInt(birthdayYear) + 1766); 
console.log(addYear);