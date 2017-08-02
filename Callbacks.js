// <!--Callbacks in
// 1)JavaScript are functions
//  that are passed as arguments to other functions. T
// his is a very important feature of asynchronous programming, 
// and it enables the function that receives the callback to 
// call our code when it finishes a long task, 
// while allowing us to continue the execution of the code.
// -->
var callback = function() {
         console.log("Done!");
}
 setTimeout(callback, 5000);