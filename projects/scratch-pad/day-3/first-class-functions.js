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
   // input is base 
   // the base can be a string or a number
   // return a function that test if the given value is greater than the base
   
//   return function(value){
//       if(value > base){
//           return true;
//       } return false; 
//   }; 
   
//   return function (value){
//       return value > base ? true : false;
//   };
    
    return value => {
        return value > base ? true : false;
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
    // input is base
    // base can be a string or a number
    // return a function that test to see if the value is less than the base
    
    return value => {
       return value < base ? true : false;
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
    // input will be startsWith which is a single character
    // return a function that can test to see if the string starts with the startsWith single character
    
    return str => {
        return str[0].toLowerCase() === startsWith.toLowerCase() ? true : false;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // input is endsWith, which is a single character 
    // return a function that test to see if the string ends with the endsWith char
    
    return str => {
        return str[str.length -1].toLowerCase() === endsWith.toLowerCase() ? true : false;
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
    // input is Array of strings and a function design to modify a string
    // return the array of strings modified.
    // use for of loop to change each element
    let arr = [];
    
    for(let element of strings){
        arr.push(modify(element));
    } return arr;

    
    
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
    // input is array of strings and a test function
    // return a boolen 
    // return true if all strings pass the test
    // return false if fail
    // loop over the strings
    
   for(let i = 0; i < strings.length; i++){
       if (test(strings[i]) === false){
       return false;
   } 
   } return true;
    
    
    
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