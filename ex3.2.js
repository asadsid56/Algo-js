const readlineSync = require("readline-sync");

let arr =  [1, 2, 3, 4, 5]; 
let sum = 0; 

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum / arr.length); 

// Pour Trouver la Valeur il faut Le Total divisé par les valeur de tableau