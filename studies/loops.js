/* LOOPS

Loops are another essential tool used in programming and javascript.
Loops are often used to iterate through a collection to identify or manipulate the different elements in the collection.
Loops can also be used to execute a block of code a certain amount of times or until a condition is met.

*/

/* 1. WHILE

While loops work exclusively with a conditional statement and will continue to execute the block of code until that condition is met. 
In some cases the condition is never met and the loop can run forever.
While loops work best with simpler forms of data.

*/

var count = 0;
while(count < 10){
    count ++;
  console.log(count);// prints the numbers 1 through 10.
}

var count = 10;
while(count > 0){
    count--;
    console.log(count);// prints the numbers 9 through 0.
}

/* 2. FOR

For loops are mostly used to iterate through arrays but can also be used on simpler data types when we know how many times we want the loop to run for.
There are three required statements used in a for loop: the index, the index condition and the incrementation of the index.

*/

var array = ['Galen', 1, true];
for(var i = 0; i < array.length; i++){
    console.log(array[i]);// prints out 'Galen' then 1 then true.
}

for(var i = array.length - 1; i > 0; i--){
    console.log(array[i]);// prints out true, then 1 then 'Galen'.
}

/* 3. FOR-IN

The for-in loop is used to iterate through the keys in an object.

*/

var object = {name: 'Galen', age: 31, boolean: true};
for(var key in object){
    console.log(object[key]);//prints out 'Galen', 31 and true
}