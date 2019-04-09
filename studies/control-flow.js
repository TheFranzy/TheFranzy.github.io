/* CONTROL FLOW

Control Flow is one of the many integral tools used in programming and javascript.
As the term implies, control flow manipulates the direction and outcome the 
program will take depending on the conditions placed by the programmer.
The two control flow methods we will be addressing are the "if-else" and "switch" methods

*/

/* 1. IF

If statements are conditional statements used to control the flow of a program through boolean decision making.
“If” initializes our conditions and will execute if those conditions are met.

*/

var ifExample = 10;
if(ifExample === 10){
    console.log("conditions are met");// prints out "conditions are met"
}

/* 2. ELSE-IF

An "else-if" statement is a tool used to add on multiple additional conditions after the initial if statement.

*/

if(ifExample > 25){
    console.log("conditions are not met"); // the conditions have not been met so the program moves on to the next condition.
}else if(ifExample < 16 ){
    console.log("conditions are met"); // prints out "conditions are met"
}else if(ifExample === 10){ // since the conditions were met in the previous else if, the program will not move on to this condition even if the condition is met.
    console.log("additional condition");
}

/* 3. ELSE

An “else” statement is a default condition used to finish off our “if-else” statement if none of the conditions have been met.

*/

if(ifExample > 25){
    console.log("conditions are not met"); // the conditions have not been met so the program moves on to the next condition.
}else if(ifExample < 6 ){
    console.log("conditions are also no met"); 
}else{
    console.log("none of the conditions have been met"); // prints out "none of the conditions have been met"  

}

/* 4. SWITCH

Switch statements are also conditional statements that function through a boolean approach.
Switch statements are typically used when involves a lot of similar or basic conditions.

*/

var switchExample = 5;

switch(switchExample) {
    case 6:
    console.log('not quite');
    break;// ends the current loop and transfers the program control on to the following statement
    case 5:
    console.log('there it is');// prints out 'there it is'.
    break;// condition has been met and switch staement prints out the result.
    default://if none of the conditions are met, default condition is printed out.
    console.log("you've gone too far");
}
