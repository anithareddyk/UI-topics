
// A function's this keyword behaves a 
// little differently in JavaScript 
// compared to other languages. It also has 
// some differences 
// between strict mode and non-strict mode.


function f1() {
  return this;
}
// In a browser:
f1() === window; // the window is the global object in browsers

// In Node:
f1() === global;

// In strict mode, however, the value of this remains at whatever it was set to when entering the execution context, so, in the following case,
//  this will default to undefined:

function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined;