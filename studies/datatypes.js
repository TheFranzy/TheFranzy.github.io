/* DATATYPES

Datatypes are the building blocks of programming.
Datatypes are the values placed in our variables.
Datatypes consist of two groups, Simple data types and complex data types.

*/

/* 1. NUMBER

The number data type has a numeric value and is a simple data type

*/

var age = 31; // 31 is the number data type and it is assigned to the age variable

/* 2. STRING

Strings are whatever characters are in between single or double quotes.
Strings are also simple data types. 

*/

var name = 'Galen'; // 'Galen' is a string data type and is being assigned to the variable name.

/* 3. BOOLEAN

Booleans have two values, true or false and are typically used for conditional statements.
Booleans are simple data types.

*/

var boolean = true; // true is the boolean data type.

/* 4. ARRAY

Arrays are complex data types that can store multiple values of any data type.
Arrays work with a zero indexed list and hold its values inside square brackets. 

*/

var list = ['Galen', 31, true];// ['Galen', 31, true] is the array assigned to the variable list.

/* 4. OBJECT

Objects are also complex data types that hold multiple values of any kind of data type.
Unlike arrays, Objects don’t work with an indexed list, rather they function with a key/value pair.
Objects hold its values between curly brackets.

*/

var collection = {name: 'Galen', age: 31, boolean: true};// {name: 'Galen', age: 31, boolean: true} is the object assigned to the variable collection.

/* 5. FUNCTION

Functions are subprograms that can be created inside the program and called on multiple times throughout the program 
as opposed to rewriting the same lines of code throughout the program. 
Functions are complex data types.

*/

function yearBorn(age){
    console.log(2019 - age);
}
yearBorn(31); // prints out 1988

/* 6. UNDEFINED

Undefined is a global object and is defined as a lack of information or value.
Undefined is a simple data type. 

*/

var nothing;
console.log(nothing);//prints out undefined because the variable nothing has not been assigned a value

/* 7. NULL

Null is the intentional lack of information or value.
Null is a simple data type.

*/

var nada = null;
console.log(nada); // prints out null.

/* 8. NAN 

NaN stands for “Not A Number”  which is also its value.
NaN is a simple data type.

*/

console.log(Number(name));//prints out NaN because 'Galen' is not a number.

/* 9. INFINITY AND -INFINITY

Infinity is any number higher than 1.7976931348623157E+10308
-Infinity is any number lower than -1.7976931348623157E+10308
Infinity and -Infinity are both simple data types.

*/

console.log(1.7976931348623157E+10308 + 1);// prints out infinity
console.log(-1.7976931348623157E+10308 - 1);// prints out -infinity

/* 10. PRIMITIVE/SIMPLE & COMPLEX DATA TYPES

Simple or Primitive data types are data types that don’t hold or add any other values and are copied by value.
Simple data types are immutable so when another variable calls on the orginal, a copy of the value will be made and any changes done to the second variable will not affect the original.

Complex data types are data types that hold and can add many other values and are copied by reference, not value. 
Complex data types are mutable so when a new variable calls on the original, the new variable will reference the original and any changes in the new variable will affect the original.                                     

*/
//example of simple data types being passed by copy
var pet = 'dog';
var happy = pet;// happy copies the value of the variable pet
happy = 'food';// the value of the variable happy is changed to 'food'
console.log(happy);// prints out 'food'
console.log(pet);//prints out 'dog' since the value was only copied and never changed.

//example of complex data types being passed by reference
var newList = ['cheese', 'milk', 'bread'];
var newerList = newList;
newerList.shift();// removes the last element inf the array
console.log(newerList);// prints ['cheese', 'milk']
console.log(newList);// also prints ['cheese', 'milk'] due to the copy by reference.
