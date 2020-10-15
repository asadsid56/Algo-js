const readlineSync = require("readline-sync");
let length = Number (readlineSync.question("Please give a larger"));
let width = Number (readlineSync.question("Please give a width ?"));

    function calcSurface(length, width) {
        return length * width; 
    }
    console.log(calcSurface(length,width)); 