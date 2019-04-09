/* FUNCTIONS

Functions are an essential tool in higher levels of programming.
Functions are subprograms created in a program to execute a certain code as many times as required in the program.

*/

/* 1.TWO PHASES TO USING FUNCTIONS

The first phase of using a function requires you to first define the function or assign it to a variable.
The second phase includes calling or executing the function anywhere out of the functions code block (unless you’re using recursion functions).

*/

function testFunction(){//the function is defined here
    console.log('the 2 phases to using a function');
}
testFunction(); // the function is called on here and will print "the 2 phases to using a function"

/* 2. DIFFERENCE BETWEEN FUNCTIONS PARAMETERS AND ARGUMENTS PASSED TO A FUNCTION

The parameter is a variable placed in the construction of the function that will later be defined by the arguments placed when calling or executing the function.

*/

function functionTest(parameter){// parameter is identified
    console.log(parameter);
}
functionTest('this is the argument');// the value of the argument is placed in the parameter and will print out 'this is the argument'

/* 3. SYNTAX FOR A NAMED FUNCTION

The syntax for a named function is as follows:
function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
*/

/* 4. ASSIGNING A FUNCTION TO A VARIABLE
The syntax for a function assigned to a variable is as follows:

var [name] = function([param1[, param2[, ..., paramN]]]) {
   statements
};
*/

var functionName = function(parameter){ // the function is assigned to the variable functionName
    console.log(parameter);
};
functionName('variable function'); 

/* 5. INPUTS/OUTPUTS

Inputs are specified by the parameter while the output will either be a return statement or if you want to print the output of the the function a console.log().

*/

function functionExample(input){// input is defined
    return input;
}
functionExample('output'); // returns 'output'

/* 6. SCOPE

The scope is where the variables are accessible.
The two different types of scopes include the global scope and the local scope.
The local scope can access variables from the global scope, but the global scope can never access variables from within the local scope

*/

var globalScope = 'out in the global scope';

function scopeTest(){
  var localScope = 'here inside the local scope';
  console.log(globalScope); //can be accessed and will print
  console.log(localScope); //can be accessed and will print
  
}
scopeTest();
console.log(globalScope);//can be accessed and will print
//console.log(localScope);  can not be accessed and will print a reference error

/* 7. CLOSURE

Closure is a function that carries within its code block a reference to a variable in the parent scope.

*/

function parentScope() {
   var b = 10;
   function childScope() {
        
         var a = 10; 
         console.log(a+b);// referencing the variable b from the parent scope
    }
   return childScope;
}
var closure = parentScope();
closure();// prints out 20