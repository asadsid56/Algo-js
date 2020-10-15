// FUNCTION WITHOUT PARAMETERS

function hello() {
    console.log("Hello asad");
    console.log("Hello jacqueline");
    console.log("Hello charlotte");
  }
hello();


// FUNCTION WITH PARAMETERS

function person(name, age, city) {
  console.log(name, age, city)
}
person("Asad", 23, "Brussels"); 

// FUNCTION WITH RETURN 

function subject(maths, science, french) {
  let s = maths + science + french; 
  return s; 
}
function percentage(tt) {
  let per = tt / 300 * 100;
  console.log(per);
}
let total = subject(55, 65, 75);
percentage(total);

