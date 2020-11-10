/**
* 0. SCOPING:
* 
* 1. Scoping is determining where variables, functions, and objects are accessible in your code during runtime. This means the scope of a variable(where it can be accessed) is controlled by the location of the variable declaration. In Javascript, there are two scopes: Global Scope and Local Scope or aka function scope.
* 
* 2. Global Scope: A variable declared inside the global scope is named global variable. Global variables are accessible from any scope. 
*
* 3. Local Scope: Variables defined inside a function are in the local scope. And they have a different scope for every call of that function. This means that variables having the same name can be used in different functions. This is because those variables are bound to their respective functions, each having different scopes, and are not accessible in other functions.
*
* 4. Block scope: When you declare a variable with const or let within a curly brace ({}), you can access this variable only within that curly brace.
*
* 5  Nested scopes: When a function is defined in another function, the inner function has access to the outer function’s variables. This behavior is also called lexical scoping.
*
* 6. Closures: Whenever you create a function within another function, you have created a closure. The inner function is the closure. This closure is usually returned so you can use the outer function’s variables at a later time.
*
*/

// 1: Here we will have some examples of the different types of scope. 

// 1.1: GLOBAL: Once you’ve declared a global variable, you can use that variable anywhere in your code, even in functions.   
       
       const globalVariable = 'value';
       
       
       const hello = 'What is up!' 
             function sayHello () {
                console.log(hello)
    }

                console.log(hello)  // => 'What is up!' 
                sayHello()          // => 'What is up!' 
       
    // Although you can declare variables in the global scope, it is advised not to. This is because there is a chance of naming collisions, where two or more variables are named the same. If you declared your variables with const or let, you would receive an error whenever a name collision happens. This is undesirable.
    
        let item = 'something'
        let item = 'something else' // => Error, thing has already been declared   
       
    // If you declare your variables with var, your second variable overwrites the first one after it is declared. This also undesirable as you make your code hard to debug. 
    
        // Don't do this!
       
        var item = 'something'
        var item = 'something else' // => perhaps somewhere totally different in your code
            conole.log(thing)       // => 'something else'

// 1.2: LOCAL: Variables that are usable only in a specific part of your code are considered to be in a local scope. 

//        
        function sayHello () {
        const hello = 'What is up!' 
            console.log(hello)
    }

        sayHello()              // 'What is up!' 
            console.log(hello)  // Error, hello is not defined
            
// 1.3: BLOCK: When you declare a variable with const or let within a curly brace ({}), you can access this variable only within that curly brace. The block scope is a subset of a function scope since functions need to be declared with curly braces (unless you’re using arrow functions with an implicit return).          

    {
        const hello = 'What is up!' 
            console.log(hello) // 'What is up!' 
}

            console.log(hello) // 'What is up!' 
            
// 1.4: NESTED: When a function is defined in another function, the inner function has access to the outer function’s variables. However, the outer function does not have access to the inner function’s variables.             
            
        function outerFunction () {
            const outer = `I'm the outer function!`

        function innerFunction() {
            const inner = `I'm the inner function!`
                console.log(outer) // I'm the outer function!
    }

                console.log(inner) // Error, inner is not defined
}  

// 1.5 CLOSURES: The inner function is the closure. 

        function outerFunction () {
            const outer = `I see the outer variable!`

        function innerFunction() {
                console.log(outer)
    }

                return innerFunction
}

    outerFunction()() // I see the outer variable!
    
    // Since the inner function is returned, you can also shorten the code a little by writing a return statement while declaring the function.

        function outerFunction () {
            const outer = `I see the outer variable!`

            return function innerFunction() {
                console.log(outer)
  }
}

outerFunction()() // I see the outer variable!