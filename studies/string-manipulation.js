/* STRING MANIPULATION

Seeing as Strings are simple data types and that they are immutable, once created, their values can never be changed.
To achieve string manipulation we need to use tools such as operators or different string methods.

*/

/* 1. WITH OPERATORS

One way to manipulate a string is through an assignment operator. 

*/

var food = 'Pepporoni';
console.log(food + ' Pizza'); // prints 'Pepporoni Pizza'
food += ' Pizza';
console.log(food); // prints 'Pepporoni Pizza'

/* 2. WITH STRING METHODS

Another way manipulate strings is using one of the many native string methods already put in place for us to use.

*/


console.log(food.toUpperCase()); // prints "PEPPORONI PIZZA"
console.log(food.toLowerCase()); // prints "pepporoni pizza"
console.log(food.charAt(0)); // prints P
console.log(food.split(' '));// prints ["Pepporoni", "Pizza"]
console.log(food.split('')); // prints ["P", "e", "p", "p", "o", "r", "o", "n", "i", " ", "P", "i", "z", "z", "a"]
console.log(food.length); // prints 15
console.log(food.split(' ')[0].toUpperCase() + ' ' + food.split(' ')[1].toLowerCase()); // prints "PEPPORONI pizza"