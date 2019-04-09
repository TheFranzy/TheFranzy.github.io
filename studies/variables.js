/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* CONSTANTS :

Like variables, constants are containers for data types
Unlike variables, constants can never be changed or hoisted.
Creating a constant includes using the const keyword, followed by a name to define the constant.
Constants must immediately be given a value.  

*/
//console.log(myConstant); since const can not be hoisted this will print a reference error stating that myConstant is not defined
const myConstant = 'constant';
//  myConstant = 'cannot be redifined'; since the value of a constant can never be changed this will give a typeError when trying to print it out
console.log(myConstant);

/* LETS

Like variables, lets variables are containers for data types.
Unlike variables, lets variables can never be hoisted but its value can be changed.
Creating a lets variable includes defining it with a name and assigning it a value.

*/

// console.log(myLet); Since let variables can never be hoisted this will print out a reference error
let myLet = 'let variable';
console.log(myLet);// prints 'let variable'
 myLet = 'new value'; // let variables' value can be changed
console.log(myLet);// will print out 'new value'

/* HOISTED

When a program runs, all the variables and function declarations are pulled to the top of the program, this is called hoisting.
Var variables can be hoisted but will usually return an undefined when done so.
Const and lets variables on the other hand can never be hoisted and will return a reference error.

*/

console.log(varVar); // prints out undefined
// console.log(letVar); prints reference error
// console.log(constVar); prints reference error
var varVar = 'var variable';
let letVar = 'let variable';
const constVar = 'constant variable';