/* OPERATORS

Programming wouldn't be possible without the use of operators.
In programming, operators are used to do anything from assign values, compare values and even perform perform arithmetic operations 
depending on the relationship between the operator and its operands.

*/

/* 1. ASSIGNMENT OPERATOR

Assignment operators assign values to the left operand depending on the value of the right operand.

*/

var food = 'pizza';
food += ' Salami';
console.log(food);//prints out pizza salami

var year = 2019;
year -= 31;
console.log(year);// prints out 1988

/* 2. ARITHMETIC OPERATORS

Arithmetic operators are used for mathematical operations and return numeric values.

*/

console.log(10 * 10); //prints 100
console.log(10 + 10 - 10); // prints 10
console.log(10 % 3); // prints 1
console.log(10 / 2); //prints 5

/* 3. COMPARISON OPERATORS

Comparison operators function on boolean true or false conditions.

*/

console.log(5 > 10);//false
console.log(5 === 5);//true
console.log(5 < 10);//true
console.log(5 !== 10);//true

/* 4. LOGICAL OPERATORS

Logical operators are usually used to specify the conditions required for certain conditions to be met.

*/

var number = 50;
console.log(number > 1 && number < 100);//both conditions have been met so prints true
console.log(number > 1 && number < 40);//one condition has not been met so prints false
console.log(number > 1 || number < 40);//one condition has been met to prints true
console.log(number > 100 && number < 40);//no condition has been met so prints false
console.log(!number);// ! prints false

/* 5. UNARY OPERATORS
 
 Unary operators are operators one operand.
 
*/

console.log(typeof 'Galen');// prints 'string'
console.log(-'100');// converts the numerical string into a number prints -100
console.log(+'100');// prints 100
console.log(!'anything');// prints false

 /* 6. BINARY OPERATOR

Binary operators are the most commonly used operators and they function with two operands. 

*/

var age = 31;
var year = 2019;
console.log(year - age); //prints 1988

/* 7. TERNARY OPERATOR

Ternary operators use three operands and are usually used in place of if statements. 

*/

console.log(age >= 21 ? 'beer' : 'milk'); //since my age is over 21 it will print out 'beer'
console.log(age >= 85 ? 'retirement' : 'work');// since the age is not over 85 it prints out 'work'