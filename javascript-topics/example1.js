var foo = "bar";
 
function bar() {
    var foo = "baz";
 
    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz(); 
}
 
bar();
console.log(foo);
console.log(bam);
baz();

//Compilation phase:
//var foo is declared in the global scope
// function bar is declared in global scope
//Now if we go into bar function var foo is declared inside the function
//function baz is declared inside the function
//Now, in fucntion ,foo and bam are declared.

//Execution phase
// foo= bar
//bar function is called here
//var foo of local baz scope is shadowing the var foo of global scope
//function baz will execute Now




