// JavaScript has two scopes – global and local.
//  Any variable declared outside of a function belongs to the global scope,
//   and is therefore accessible from anywhere in your code. 
//   Each function has its own scope, 
// and any variable declared within that function is only accessible from that function and any nested functions.
var test = "I'm global";

function testScope() {
  var test = "I'm local";

  console.log (test);     
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global