// <!--Var:
// The scope of a variable declared with the keyword var is its current execution context.
//  This is either the enclosing function or for variables declared outside any function, global.-->

// <!--Let:
//   Variables declared with the keyword let is block scoped not function scope-->

//   <!--Const:
//   The const keyword -> allow immutable variables.
// Variables whose value cannot be modified once assigned as const.
// A constant variable must be both declared and initialised before use.-->
// <!--Example :let and Var keywords-->
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  
    console.log(x);  
  }
  console.log(x);  
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
