// console.log(x); // Reference error, x is not defined. 
function myFunction() {
    var x = 10; // x is in the lexical scope of myFunction
    console.log(x); // Can access x here
}
  
// console.log(x); // Cannot access x here, it's out of scope

console.log("y is ", y); // Note that the value of y here is undefined.
var y = 90;