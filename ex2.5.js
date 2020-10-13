const readlineSync = require("readline-sync");

let favorNum = Number (readlineSync.question("Enter a Number"));
while (favorNum !== 42) {
    favorNum = Number (readlineSync.question("Are you sure"));
}