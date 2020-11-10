/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 *    variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 * 
 * 3. Variables are named containers that can store data.
 *
 * 4. Only needs to be declared once.
 * 
 * 5. Referencing the name of the varible will return the value.
 *
 * 6. Must start with a letter. Only & and _ are the exceptions. 
 *
 * 7. When you declare a variable, remember that it is also case sensitive. 
 *
 * 8. They can hold many types of DATA like : Number, String, Boolean, Array, Object or even another Variable!. 
 *
 * 9. The value of the variable can change as much as you want it to. 
 *
 * 10. When you assign a variable name it should have a clean, obvious meaning describing what the data stores.
 *
 * 11. There are 3 ways that you can declare a variable. 
 *
 * 12. Var declarations are globally scoped or function scoped. Var variables can be updated and re-declared within its scope. Any variable that is declared with var outside a function block is available for use in the whole window. Var is also be hoisted.
 *
 * 13. Var used to be the only way to declare a variable before 2015 (ES6) update, now they have 2 prefer ways of declaring a variable.  
 *
 * 14. The let declarations follow the same syntax as var declarations. Unlike variables declared with var, variables declared with let have a block-scope. This means that the scope of let variables is limited to their containing block, e.g. function, if else block or loop block. Let is not hoisted.
 *
 * 15. Const Variables can be declared using const similar to var or let declarations. The const makes a variable a constant where its value cannot be changed. Const variables have the same scoping rules as let variables. Const is also not hoisted.
 *
 */



// 1. declaration //

      var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */

   console.log(myName); // prints => undefined

// 2. initialization or assignment //

      myName = 'john';

      console.log(myName); // prints => john

// 3. re-assignment //

      myName = 'bob';

      console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //

         var myVariable = 1;

         var myVariable = true; 

         var myVariable = "someString";

// 4. Here are the 3 different ways to declare a variable:


// 4.1: Here is a few examples of a var being used
        
        // It’s important to intentionally declare your variables within a specific scope, using var, to keep your code clear and maintainable.
        // Below code properly declares x both outside and inside the function using var.
            
            var x = "outside";
                function foo() {
            var x = "inside";
                console.log(x);
            }

                foo();          // => inside
                console.log(x); // => outside
        
        // What happens without var in foo?
        
            var x = "outside";
                function foo() {
            x = "inside";
                console.log(x);
            }

                foo();          // => inside   // Uh oh! x outside the function was overwritten by x inside the function because we didn’t specify that x was to be scoped only to foo!
                console.log(x); // => inside 

// 4.2: Let variables are block-scoped! Specific scope = less mistakes: Here is an example:
        
        let i = 0;
            if (true) {
        let i = 1;
       }
            console.log(i); // => 0    // Even though i was assigned to 1 in the if block, that assignment was local to the block and therefore our “global” i was still 0. The if block’s scope was separate from the global scope.

// 4.3: Const variables restricts over-writing variables.
        
        const a = 0;
        a = 1; // => TypeError: Assignment to constant variable.   // const doesn’t even let you declare a variable without assigning its (constant) value! 
        const a; // SyntaxError: Missing initializer in const declaration   
        
        if (true) {
            const a = 0;
       } 

            console.log(a); // ReferenceError: i is not defined  // const, like let, is block scoped.