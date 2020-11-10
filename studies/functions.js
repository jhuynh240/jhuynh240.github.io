/**  FUNCTIONS:
* 0. Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. 
* 
* 1. While the function declaration above is syntactically a statement, functions can also be created by a function expression. Function expressions are convenient when passing a function as an argument to another function. 
* 
* 2. Defining a function does not execute it. Defining it simply names the function and specifies what to do when the function is called. Calling the function actually performs the specified actions with the indicated parameters. The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function.
*
* 3. There are 4 parts to a function:
*
* 4. NAME: The function name.
*
* 5. PARAMETER(S): Function can optionally take parameters. So they can take no parameters or as many are required. Parameters are just placeholders for arguments that are later passed or given to the function at call time. If the function needs parameters, put the parameters inside the (  ). If no parameters are needed, leave the (  ) empty.
*
* 6. FUNCTION BODY: The statements comprising the body of the function.
*
* 7. RETURN STATEMENT: Stops the execution of that function and return a value from that function. Function can optionally have a return statement. The return statement will pull a value from a function call. Return statements can only be used in a function body.

*
* 8. FUNCTION AND FUNCTION CALLS KEY POINTS: 
*     Functions are predefined commands for preforming an action.
*     Function call tells the computer to perform that action once.
*     Function calls in Javascript are written like this: function();
*     Arguments are data inputs for a function call
*     if the function needs arguments, you will place them inside the ();
*     if no arguments are needed, leave the () empty
* 
* 9. Another part of the function that we will discuss here is the Closure part.
* 
* 10. A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished. A function in a function.
*
*/

// 1: The proper syntax of a function:

/*    function name(parameter1, parameter2, etc){
*      <function body>
*      <function body> 
*      return statement (or no return statement)
*      }
*/


// 2: Here will be an example of a function taking 2 parameters and calling it with 2 arguments. The return is adding the 2 paramters together:

      function a(num1, num2){
                return num1 + num2;
      }
      
      console.log(a(2, 2));

// 3: Here we will assign a variable to a function and call it

      var getType = function funName(variable) {
      console.log(typeof funName === 'function'); // => true
      return typeof variable;
      };
       console.log(getType(3));     // will print in console 'number'
       console.log(getType.name);   // will print in console 'funName'
       console.log(typeof funName); // will print in console 'undefined'


// 4: Here we will have an example of a function Closure. 

      function person() {
        let name = 'Peter';
  
         return function displayName() {
             console.log(name);
         };
            }let peter = person();
        
            peter(); // prints 'Peter'

    //In this code, we are calling person function which returns inner function displayName and stores that inner function in peter variable. When we call peter function (which is actually referencing the displayName function), the name ‘Peter’ is printed to the console.

    //But we don’t have any variable named name in displayName function, so this function can somehow access the variable of its outer function person even after that function has returned. So the displayName function is actually a closure.

