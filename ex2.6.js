const readlineSync = require("readline-sync");

let number = Number (readlineSync.question("Please enter a Number between 1 & 7 ?"));

if (number == 0) {
    console.log(Number (readlineSync.question("Please enter a Number between 1 & 7 ?")));
} 
else if (number == 1) {
    console.log("Monday");
}
else if (number == 2) {
    console.log("Tuesday");
}
else if (number == 3) {
    console.log("Wednesday");
}
else if (number == 4) {
    console.log("Thursday");
}
else if (number = 5) {
    console.log("Friday");
}
else if (number = 6) {
    console.log("Saturday");
}
else if (number = 7) {
    console.log("Sunday");
}  else {
    console.log(Number (readlineSync.question("Please enter a Number between 1 & 7 ?")));
}