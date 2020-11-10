/**  DATATYPES:
* 0.  Data types in JavaScript describe the different types or kinds of data that you will be working with and storing in variables. There will be 2 different Data Types that are explained below.
* 
* 1.  SIMPLE DATA TYPES (PRIMITIVE):
* 
* 2.  Simple Data Type are also known as Primitive data type. A primitive is data that is not an object and has no methods. The Data Types listed below are primitive.  A primitive is not an object and has no methods of its own. All primitives are immutable. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.
*
* 3.  The String Data Type: is used to represent textual data (i.e. sequences of characters). Strings are created using single or double quotes surrounding one or more characters. Strings are collections of alphanumeric characters and symbols.
*
* 4.  The Number Data Type: are just what they sound like. They’re numbers, including both integers and decimals. Computers will often use numbers to perform mathematical operations, but they may also just be a number like a count of how many flavors of ice cream a particular store has.
*
* 5.  The Boolean Data Type: can hold only two values: true or false. It is typically used to store values like yes (true) or no (false), on (true) or off (false).
*
* 6.  The Null: means empty or nothing, but it’s that way because a developer told it it was empty or nothing.  It is not equivalent to an empty string ("") or 0, it is simply nothing.
*
* 7.  The Symbol Data Type: is a unique value that's not equal to any other value. A symbol value may be used as an identifier for object properties; this is the data type's primary purpose, although other use-cases exist, such as enabling opaque data types, or serving as an implementation-supported unique identifier in general.
*
* 8.  The Undefined: is a primitive type that has one special value undefined . By default, when a variable is declared but not initialized, it is assigned the value of undefined . In this example, foo is a variable. Since foo is not initialized, it is assigned the value of undefined. The purpose of an undefined datatype is to denote an absence of a meaningful value. Many operations in JavaScript produce a meaningless result and to represent that, they return an undefined value, simply, because they have to return something! 
*
* 9.  NAN: stands for, “Not a Number” is a value that does not represent a real number, despite having number type. NaN is useful to represent faulty operations on numbers. The NaN is an error value in the JavaScript. However, technically it is the property of the global object. You get NaN when the value cannot be computed or as a result of attempted number coercion (type conversion) of non-numeric value (such that undefined) for which primitive numeric value is not available.
*
* 10. INFINITY: The value of the infinity is the largest number your JavaScript interpreter can handle. It is never ending number that is greater than 0.
*
* 11. -INFINITY: The NEGATIVE_INFINITY is the largest negative number the JavaScript interpreter can represent. It is the never ending number that is less than 0.
*
* 12. COMPLEX DATA TYPES: ARRAY AND OBJECTS
*
* 13. THE ARRAY DATA TYPE: An Array is also a collection of values. Unlike an object, an Array is a collection of ordered values, not named values. Each member of an Array is called an element. Each element is denoted by a numeric position in the array–the position is called an index.
*
* 14. OBJECT DATA TYPE: An object contains properties, defined as a key-value pair. A property key (name) is always a string, but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects.
*
* 15. Here are some of the differences describing the 2 different data types:
*
* 16. SIMPLE(PRIMITIVE) DATA TYPES: are known as being immutable data types because there is no way to change a primitive value once it gets created. 
*
* 17. SIMPLE(PRIMITIVE) DATA TYPES: are compared by value. Two values are strictly equal if they have the same value.
*
* 18. COMPLEX DATA TYPES: values are mutable data types. The value of an object can be changed after it gets created. Objects are not compared by value. This means that even if two objects have the same properties and values, they are not strictly equal. Same goes for arrays. Even if they have the same elements that are in the same order, they are not strictly equal.
*
* 19. COMPLEX DATA TYPES: can also be referred to as reference types because they are being compared by reference instead of value. Two objects are only strictly equal if they refer to the same underlying object.
*
* 20. And the last 2 differences that they have is: Simple Data Types is copied by value and Complex Data Types are copied by reference.
* 
* 21. COPY BY VALUE: When you assign a variable, it is a reference to an object not the object itself. When you copy an object b = a both variables will point to the same address.
*
* 22. COPY BY REFERENCE:A reference type can contain other values. Since the contents of a reference type can not fit in the fixed amount of memory available for a variable, the in-memory value of a reference type is the reference itself (a memory address).
*
*
*/



// 1: Examples of SIMPLE DATA TYPES:

// 1.1: STRING DATA TYPE:
        var a = "string";
   
// 1.2: NUMBER DATA TYPE:
        var b = 1;
   
// 1.3: BOOLEAN DATA TYPE:
        var c = true;
   
// 1.4: THE NULL:
        var d = null;

// 1.5: THE SYMBOL DATA TYPE:
        var e = Symbol();
        
// 1.6: THE UNDEFINED:
        var f = undefined;
        
// 1.7  NAN:
        
        function num(x) {
        if (isNaN(x)) {
        return NaN;
        }
        return x;
        }
        
        console.log(num('1')); // expected output: "1"

        console.log(num('NotANumber')); // expected output: NaN
        
// 1.8 INFINITY:  

        // Infinity is just a concept of endlessness, and can be used to represent numbers going on forever.
        
// 1.9 -INFINITY:

        // Negative infinity is the opposite of (positive) infinity, or just negative numbers going on forever.
        
// 2: Examples of COMPLEX DATA TYPES:

// 2.1: OBJECT DATA TYPE:

        var obj ={};     // this creates and object with an empty object literal;
        var obj ={
            key: "value" // this creates and object with a property of key:values inside the object; 
        }
        
// 2.2 ARRAY DATA TYPE:
        
       var array = []; // this creates and array with an empty array literal;
       var array = ["element 1", "element 2"] // this creates and array with 2 elements inside;
       
// 3: Examples of COPY BY VALUE AND COPY BY REFERENCE:

// 3.1: COPY BY VALUE:

        var a = 13         // assign `13` to `a`

        var b = a          // copy the value of `a` to `b`
         
        b = 37             // assign `37` to `b`
  
        console.log(a)     // => 13
        
        

// 3.2: COPY BY REFERENCE:
        
        var a = { c: 13 }  // assign the reference of a new object to `a`
        
        var b = a          // copy the reference of the object inside `a` to new variable `b`
        
        b.c = 37           // modify the contents of the object `b` refers to

        console.log(a)     // => { c: 37 }