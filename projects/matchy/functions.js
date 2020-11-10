/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called search
// takes a paramater animals with is an array
// takes a paramater animal which is a string that represents the name of an animal to perform a search on
// look through the animals array and returns the animal's object if the animal is found 
// return null if no animal with that name exists

var search = (animals, animal) => {
   for(let i = 0; i < animals.length; i++){
       if(animals[i].name === animal){
           return animals[i];
       } 
   } return null;
};




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called replace 
// replace has 3 parameters animals, name and replacement
// if the animal with the name exists in the animals array, replace the object

var replace = (animals, name, replacement) => {
    for (let i = 0; i < animals.length; i++){
        if(name === animals[i].name){
            animals.splice(i, 1, replacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function called remove
// remove will have 2 parameters: an array of animals and a name of an animal with to preform a search on
// if the animal matches the animals.name then remove it 

var remove = (animals, animal) => {
    for(let i = 0; i < animals.length; i++){
        if(animals[i].name === animal){
            animals.splice(i, 1);
        }
    }
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a function call add
// add will have 2 parameters
// check to see if the name property has a length > 0
// check to see if the species property has a length > 0
// check to see if the name is unique that no other animals have that name
// add the new object to the animals array if all the conditions passes

var add = (animalsArr, animalObj) => {
    for(let i = 0; i < animalsArr.length; i++){
        if(animalObj.name === animalsArr[i].name){
            break;
        } else if (animalObj.name.length > 0 && animalObj.species.length > 0){
            animalsArr.push(animalObj);
        }
       
        
    }
};


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
