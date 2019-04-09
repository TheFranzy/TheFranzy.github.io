// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // console.log(base);
    return function randomValue(value){
        if(value > base){
            return true;
        }else{
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function secondValue(value){
        if(value < base){
            return true;
        }else{
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // console.log(startsWith);
    //return a new function with a string as a parameter
    return function startsWithFilter(string){
        //check to see if the string matches the startsWith parameter
        // identify the first letter in the string using the index
        // upperCase or lowerCase the character to make it case insensitive.
        if(string[0].toUpperCase() === startsWith.toUpperCase()){
            return true;
        }else{
            return false;
        }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // return a new function with a string as its parameter
    return function endsWithFilter(string){
        //use if statement to find ot if the parameters match
        //isolate the last character of the string to compare it to the endwith character
        // uppercase or lowercase the characters to make it case insensitive
        if(string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        }else{
            return false;
        }
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // console.log(strings, 'the strings');
    // console.log(modify, 'modification');
//create an empty array to hold the modified strings
    var arr =[];
    //create a for loop to iterate through the array of strings
    for(var i = 0; i < strings.length; i++){
        arr.push(modify(strings[i]));
    }
    return arr;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // console.log(strings);
    // console.log(test);
//loop through the array of strings

for(var i = 0; i < strings.length; i++){
    if(!test(strings[i])){
        return false;
    }
    
}
return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}