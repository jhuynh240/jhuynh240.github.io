////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, b) {
  if(a < b){    // if a is less than b, return a
    return a;
  } 
  if(b < a){    // if b is less than a, return b
    return b;
  } 
  if(a === b);  // if a === b then return a
  return a;    

}


////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) { 
  if(number % 2 === 0) { // using % 2 to find even number base case
    return true;
  } else if (number % 2 === 1 || number < 0) { // will return false if odd or less than 0
    return false;
  } else   {
   return isEven(number - 2); // => the recursion case
  }
}


////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char){
  var result = 0;  // Creating a counter 
  for(var i = 0; i<string.length;i++){ // loop through to count the chars in the string

    if(string[i] === char){
      result++; // add to the counter 
    }
  }
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string){
  var result = 0;  // creating counter to store the 
  for(var i = 0; i<string.length;i++){  // loop through the string to count the b
    if(string[i].toLowerCase() === "b"){ // if there is a b, add to the counter
      result++;
    }
  }
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
