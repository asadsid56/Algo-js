const readlineSync = require("readline-sync");

let fruitsArray = ["Apple", "Pear", "Banana", "Cherry"];
let duplicateArray = []; // an empty array

for (let i = 0; i < fruitsArray.length; i++) {
    duplicateArray += fruitsArray[i]   
}
console.log(duplicateArray);