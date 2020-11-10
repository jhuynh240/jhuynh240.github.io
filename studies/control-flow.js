/** 
* 0. CONTROL FLOW:
* 
* 1. CONTROL FLOW: refers to the order in which a sequence of code is executed. Statements will execute from top to the bottom. The statements inside your source files are generally executed from top to bottom, in the order that they appear. Control flow statements, however, break up the flow of execution by employing decision making program to conditionally execute particular blocks of code. 
* 
* 2. The different types of control flow statements are: Conditional Statements and Switch statements.
*
* 3. CONDITIONAL STATEMENTS: control behavior in JavaScript and determine whether or not pieces of code can run. 
*
* 4. IF STATEMENT: are used for the purpose of decision making; they evaluate the statement if the condition is true. To check if the given If condition is satisfied, If Statement is executed; otherwise the condition is false to exit the If condition.
*
* 5. ELSE IF: is another decision-making statement. It evaluates the Statement only if condition is true from several conditions, elseif statement can be used many times in a program; if the two conditions are false it means else Statement is executed.
*
* 6. ELSE STATEMENT: is the last on the list of an if else statement. When there is no more conditions else is used. 
*
* 7. SWITCH CASE STATEMENT: is a control Statement, it is better than If else statements. To improve the readability of a program multiple if else Statements can be replaced with Switch Statements. In Switch Case Statements, using the break statement will cause an immediate exit from switch statement as soon as the code under the code is executed.
*
*/

// 1: Here is a example of a conditonal statement and its proper syntax:

/*  if (condition1) {
*  //  block of code to be executed if condition1 is true
*  } else if (condition2) {
*  //  block of code to be executed if the condition1 is false and condition2 is true
*  } else {
*  //  block of code to be executed if the condition1 is false and condition2 is false
*  }
*/

// 2: So here we have a example of a message to display when depending on the time of day based on a 24 hour clock:

  var time = 19;

  if (time < 12){                    // the beginning of a if statement, the statement will end on a boolean;
  console.log('Good Morning!');        // will print on the console if it is before 12 and will stop if true;
  } else if (time === 12){               // if false it will go to the next condition;
  console.log('Its Noon!');            // will print on the console if true and stop;
  } else if (time > 12 && time < 18 ){   // here is another condition, the if statement can contain as many else if statements you want;
  console.log('Good Evening!');        // will print on the console if true and stop;
  } else {                               // and if it doesn't meet any condition above, it will go to the else statement which is the last and will print if the above isn't true; 
  console.log('What are you doing!!'); // will print on the console if above conditions isn't met;
  }
 

// 3: Here is the proper syntax for a SWITCH STATEMENT:

/* switch(expression) {
*  case x:
*    // code block
*  break;
*  case y:
*    // code block
*  break;
*  default:
*    // code block
*  } 
*/

// 4: Here is an example of a switch statements using the number and displaying a message showing what day it is:

let day =  4;                                 // will choose a day with the number;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");    // since the number 4 represents day, this message will print on the console;
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");   // it will choose what to print on the console depending the number of day;
        break;
}