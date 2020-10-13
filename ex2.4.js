const readlineSync = require("readline-sync");

for (let a = 0; a <= 10; a++) {
    if (a % 2 === 0) {
        console.log(a / 2);
    } 
    else {
        console.log(a * 3);
    }
}