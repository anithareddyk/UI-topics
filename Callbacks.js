// <!--Callbacks in
// 1)JavaScript are functions
//  that are passed as arguments to other functions. 
//This is a very important feature of asynchronous programming, 
// and it enables the function that receives the callback to 
// call our code when it finishes a long task, 
// while allowing us to continue the execution of the code.
// -->
// other definition:
// A callback function, also known as a higher-order function, 
// is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, 
// and the callback function is called (or executed) inside the otherFunction. A callback function is essentially 
// a pattern (an established solution to a common problem),
//  and therefore, the use of a callback function is also known as a callback pattern.
var callback = function() {
         console.log("Done!");
}
 setTimeout(callback, 5000);