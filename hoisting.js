// Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations 
// to the top of the current scope. 
// However, only the actual declarations are hoisted. Any assignments are left where they are.
//for example
(function() {
  var foo;
  var bar;
  var baz;

  foo = 1;
  alert(foo + " " + bar + " " + baz);
  bar = 2;
  baz = 3;
})();

