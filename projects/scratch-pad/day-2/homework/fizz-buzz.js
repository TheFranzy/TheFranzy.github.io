// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//create an empty variabel
var count = 0;
//use a while loop to limit the counter to 100 or less
while (count < 100){
    count ++;

if(count % 3 === 0 && count % 5 === 0){
    console.log('FizzBuzz');
}else if(count % 3 === 0){
    console.log('Fizz');
}else if(count % 5 === 0){
    console.log('Buzz');
}else{
    console.log(count);
}
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}