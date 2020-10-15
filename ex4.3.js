const readlineSync = require("readline-sync");
let num = Number (readlineSync.question("Please give a number"));


function rand10() {
    return Math.floor(Math.random()*11)
}
console.log(rand10());

function multiRand(n) {
    let array = []; 
    for (let i = 0; i < n; i++) {
        let random = rand10(); 
        array[i] = random; 
    }
    return array;
}
console.log(multiRand(num));