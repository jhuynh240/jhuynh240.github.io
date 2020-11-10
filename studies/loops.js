/** 
* 0. LOOPS:
* 
* 1. Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false when analysed. A loop will continue running until the defined condition returns false. An operation is done, such as getting an item of data and changing it, and then some condition is checked such as whether a counter has reached a prescribed number.
* 
* 2. Counter not Reached: If the counter has not reached the desired number, the next instruction in the sequence returns to the first instruction in the sequence and repeat it.
*
* 3. Counter reached: If the condition has been reached, the next instruction “falls through” to the next sequential instruction or branches outside the loop.
*
* 4. The 3 most common type of Loops are: For Loop, While loop and For...In Loop.
*
* 5. FOR LOOP: provides a concise way of writing the loop structure. Unlike a while loop, a for statement consumes the initialization, condition and increment/decrement in one line thereby providing a shorter, easy to debug structure of looping.
*
* 6. Initialization condition: Here, we initialize the variable in use. It marks the start of a for loop. An already declared variable can be used or a variable can be declared, local to loop only.
*
* 7. Testing Condition: It is used for testing the exit condition for a loop. It must return a boolean value. It is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.*
* 
* 8. Statement execution: Once the condition is evaluated to true, the statements in the loop body are executed.
* 
* 9. Increment/ Decrement: It is used for updating the variable for next iteration.
* 
* 10. Loop termination:When the condition becomes false, the loop terminates marking the end of its life cycle.
*  
* 11. WHILE LOOP: is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.
* 
* 12. While loop starts with the checking of condition. If it evaluated to true, then the loop body statements are executed otherwise first statement following the loop is executed.
* 
* 13. Once the condition is evaluated to true, the statements in the loop body are executed. Normally the statements contain an update value for the variable being processed for the next iteration.
* 
* 14. When the condition becomes false, the loop terminates which marks the end of its life cycle.
* 
* 15. FOR...IN LOOP: can be used to iterate over the items within an iterable object. for...in loops are useful if we want to run a certain block of code based on the number of attributes in an object, or items in an array.
* 
 
*/


// The FOR LOOP has the following syntax:

// 1: for (<START CONDITION>; <STOP CONDITION>; [INCREMENTS]) {
//          <STATEMENT>
//    }

// 2: START CONDITON: The condition set to tell your loop where to begin.
//    STOPPING CONDITION: The condition set to tell when your loop to stop (based on boolean value).
//    INCREMENT: The command to tell how to move per iteration. 

// 3: Example of a for loop counting forward. Here we will count the numbers from 1 to 10 and print it on the console:

      for(var i = 1; i <= 10; i++){
      console.log(i);              // will show on the console 1 2 3 4 5 6 7 8 9 10
      }

// 4: Example of the same for loop but counting backwards:

      for(var i = 10; i >= 1; i--){
      console.log(i);              // will show on the console 10 9 8 7 6 5 4 3 2 1 
      }

// 5: Here is an example of looping over an array of pets:

// 6: Here we have declared an array called pets which contains an array of animals:

      var bikes = ["Trek", "Specialize", "Cervelo"];

// 7: We will loop forward through the array and we will print the pets array on the console:

      for(var i = 0; i < bikes.length ; i++){
      console.log(bikes[i]);                 // will print on the console cat dog bird;
      }

// 8: The next example will show the pets array print backwards on the console:

      for(var i = bikes.length -1; i >= 0 ; i--){
      console.log(bikes[i]);                     // will print on the console bird dog cat;
      }

// The WHILE LOOP has the following syntax:

// 1: while (<CONDITION>){
//    <STATEMENT(S)>
//    }

// 2: CONDITION: Here, condition is a Boolean expression which is evaluated before each pass through the loop. If this condition evaluates to true, statement(s) is/are executed. When condition evaluates to false, execution continues with the statement after the while loop.
//    STATEMENT: A statement that is executed as long as the condition evaluates to true.

// 3: Here is an example of a while loop printing 1 to 5 on the console:

      var i = 1;
      while (i <= 5){
      console.log(i); // will print 1 2 3 4 5 on console;
      i++;            // this also means the same as i = i + 1;
      }

// the FOR...IN LOOP has the following syntax:

// 1: for (<VARIABLE> in <OBJECT>) {
//    <STATEMENTS>
//    }

// 2: VARIABLE: The name of a variable, an element of an array, or the property of an object
//    OBJECT: A valid object or name of an object whose properties will be iterated through.
//    STATEMENTS: The statements of code to execute each pass through the loop.

// 3: Here is an example of different brands of bikes in an object:

      var bikeBrands = {
      brand: "Specialize",
      brand: "Cervelo",
      brand: "Trek"
      };
      
// 4: We will create a for in loop to print the object on the console: 

      for(var key in bikeBrands){
          console.log(key);         // will print the key in the console;
          console.log(bikeBrands[key]); // will print out the value in the console;
          console.log(bikeBrands); // will print out the bikeBrands object;
      }