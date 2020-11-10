/** 
* 0. HOISTING:
* 
* 1. Hoisting in JavaScript is a feature in which the interpreter moves the function and variable declarations to the top of their containing scope. It means that variable declarations, wherever they occur, are processed before any code is executed. All variable declarations are moved to the top of their scope (global or local).  Note that hoisting only moves the declaration and not the assignment
* 
* 2. Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script. 
*
* 3. Functions, when declared with a function declaration, are always hoisted to the top of the current scope.
*
* 4. Function declarations are hoisted, while function expressions aren’t. The JavaScript engine hoists function declarations by lifting it up the current scope before actually executing the script.
*
* 5. A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions
*
* 6. A JS Interpreter is a program or an interpreter which executes JavaScript code. A JavaScript engine can be implemented as a standard interpreter, or just-in-time compiler that compiles JavaScript to bytecode in some form.
*
* 7. This is a list of popular projects that are implementing a JS Interpreter:
*
* 8. V8 — open source, developed by Google, written in C++
*
* 9. Rhino — managed by the Mozilla Foundation, open source, developed entirely in Java
*
* 10. SpiderMonkey — the first JavaScript engine, which back in the days powered Netscape Navigator, and today powers Firefox
*
* 11. JavaScriptCore — open source, marketed as Nitro and developed by Apple for Safari
*
* 12. KJS — KDE’s engine originally developed by Harri Porten for the KDE project’s Konqueror web browser
*
* 13. Chakra (JScript9) — Internet Explorer
*
* 14. Chakra (JavaScript) — Microsoft Edge
*
* 15. Nashorn, open source as part of OpenJDK, written by Oracle Java Languages and Tool Group
*
* 16. JerryScript — is a lightweight engine for the Internet of Things.
*
*/

// 1. Here are some of the examples to Hoisting:
 
// 1.1. var code (global)
        
        console.log(name); // undefined 
        var name = 'Ryan';  

// 1.2. Let’s look at how function scoped variables are hoisted:

        function fun(){                         //function scoped 
            console.log(name); 
                var name = 'Ryan'; 
} 
        fun();                                  // undefined 

        // here is no difference here as when compared to the code where we declared the variable globally, we get undefined as the code seen by the interpreter is:
        
        function fun(){ //function scoped 
             var name; 
                console.log(name); 
                    name = 'Ryan'; 
} 
        fun(); // undefined 

        
        // In order to avoid this pitfall,we can make sure to declare and assign the variable at the same time,before using it. Something like this: 
        
        
        //in order to avoid it  
    
        function fun(){ 
            var name = 'Ryan'; 
                console.log(name); // Ryan 
} 
        fun(); 

// 1.3 Let: We know that variables declared with let keywords are block scoped not function scoped and hence it is not any kind of problem when it comes to hoisting. This ensures that we always declare our variable first.  It is also block scoped and cannot be used until declared. There is, however, one key difference. Once variable declared using const keyword is assigned a value, you cannot reassign it. You also need to initialize the variable immediately when declaring it.  It is useful as this prevents accidental reassignment of the variable. It also promotes good coding practices as it prohibits using a single variable for multiple purposes during its lifecycle, which is confusing and error-prone.

        let howdy;

            console.log(howdy); // undefined

        howdy = "Hello";
        
        // This is what happens when you try to console.log     
        
            console.log(typeof iDontExist); // undefined
        
            console.log(typeof greeting); // cannot access 'greeting' before initialization

        let greeting = "hello";
