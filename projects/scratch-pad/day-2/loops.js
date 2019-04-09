// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // use for loop to go through every value in the array
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
// loop backwards through array to identify the values
for(var i = array.length - 1 ; i >= 0; i--){
  console.log(array[i]);
}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //create an empty array to hold keys
   var arr = [];
  // use for in loop to retrieve all of the  keys in the object
  for(var key in object){
    arr.push(key);
    
  }
  // return Object.keys(object);
return arr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //use for in loop to go through the keys
  for(var key in object){
     //push the keys into the empty array
     console.log(key);
  }
 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  console.log(object);
  // create an empty array to hold the object values
  var arr = [];
  
  //use for in loop to access the keys in the object.
  for(var key in object){
    arr.push(object[key]);
  }
  return arr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // use for in loop to go through the object keys and value pairs
  
  for(var key in object){
    //use console.log to print out the object keys
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // create an empty array to hold the key/value pairs
  var arr = [];
  // use for in loop to access the key/value pairs
  for(var key in object){
    // push the key/values into the array
    arr.push(object[key]);
  }
  // return the array's length
  return arr.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // use an empty array to hold the value 
  
  var arr = [];
  
  //loop through the object using the for in loop
  for(var key in object){
    // push the value into the empty array
    arr.push(object[key]);
  }
  //use reverse for loop to iterate backwards through the array
  for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
