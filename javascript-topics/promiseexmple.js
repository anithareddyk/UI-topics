for(var i=0; i<5;++i){
    setTimeout(function(){
        console.log(i); //output is '5' for 5 times
    }, 100);
}
for(let i=0; i<5;++i){
    setTimeout(function(){
        console.log(i); //output is 0,1,2,3,4
    }, 100);
}
//compilation Phase:var
//1. i is declared as global scope
//execution phase:
//1. i is assigned to zero 
//2. i is printed for each time after completion of loop 

// Compilation phase:let
//1.i is declared block scope
//execution phase
//1.initially i is assigned to zero;i=0
//2. as let is functionscope, i will be increased by one and prints
//3. repeats the loop untill condition fails
