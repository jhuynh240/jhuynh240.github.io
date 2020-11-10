/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//  !!!!! MUST USE VAR !!!!!

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable name animal and assign it to an empty object literal

var animal = {};

// use dot notation and give animal a property called species 
animal.species = 'dog';

// use bracket notation and give animal a property called name.
animal.name = 'bob';

// use either notation to give animal a property called noises with a empty array
animal.noises = [];

// console.log to print animal 
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// creating an array with one element of the animal sound
var noises = ["moan"];

// using an array function push to add a noise at the end of the array
noises.push("bark");

// using an array function unshift to add a noise at the beginning of the array
noises.unshift("cry");

// using bracket syntax to add a noise to the end of the array
noises[noises.length] = "growl";

// console.log the length of noises
console.log(noises.length);

// console.log the last element of noises
console.log(noises.length -1);

// console.log noises
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use bracket syntax to assign noises property on animal object with noises array
animal['noises'] = noises;

// use any syntax to add another noises property on animal
animal.noises.push('snore');

// console.log animal

console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a variable name animals and assign it to an empty array
var animals = [];

// push animal in the animals array 
animals.push(animal);

// console.log animals
console.log(animals);

// create a variable called duck and assign it to the data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }

// push duck to animals
animals.push(duck);

// console.log animals
console.log(animals);

// create 2 more animal objects just like duck and 2 sounds each

var cat = { species: 'cat', name: 'Jack', noises: ['meow', 'screech'] }
var bird = { species: 'bird', name: 'Blue', noises: ['cry', 'chirp'] }

// push cat and bird into animals
animals.push(cat, bird);

// console.log animals and also console.log the length of animals
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// choose a data structure to hold a list of friends
var friends = [];

// create a function called getRandom 
// input is animals array and returns a random index of the input array using Math.random
// use randomIndex from this function to get a random animal and add its name to friends

var getRandom = animals => {
    var min = 0;
    var max = animals.length;
    var randomIndex = Math.floor(Math.random()*(max - min)) + min;
    return friends.push(animals[randomIndex]);
};

// console.log friends
console.log(friends);

// use bracket notation to add the friends list as a property named friends on the animals in the animals array
animals[0].friends = friends;

// console.log animals
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}