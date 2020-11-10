/**
* STRING MANIPULATION:
*
* 0. String manipulation (or string handling) is the process of changing, parsing, splicing, pasting, or analyzing strings. ... Typically, most programming languages provide a string data type that holds a sequence of characters.  
*
* 1. concat() - Combines the text of two or more strings and returns a new string.
*
* 2. indexOf() – Returns the starting index of a substring within another string. A –1 is returned if no match is found.
*
* 3. charAt() – Returns the character at the specified location. 
*
* 4. lastIndexOf() - Returns the index within the string of the last occurrence of the specified value, or -1 if not found.
*
* 5. match() - Used to match a regular expression against a string.
*
* 6. substring() – A portion of a string is returned. A starting and ending location are passed to this function.
*
* 7. replace() – Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
*
* 8. search() - Executes the search for a match of a regular expression. If successful, search returns the index of the match inside the string. Otherwise, it returns -1.
*
* 9. slice() - Extracts a section of a string and returns a new string.
*
* 10. split() - Splits a string into an array of strings by separating the string into substrings.
*
* 11. length() – The length of the string is returned as the count of the number of characters it contains.
*
* 12. toLowerCase() – Converts the entire string to lower case. 
*
* 13. toUpperCase() – Converts the entire string to upper case.
*
* 14. In addition to the functions, there are numerous special characters that may be used to represent key effects. These characters include the following:
*
* 15. \t – tab
*
* 16  \b – backspace/delete
*
* 17. \r – carriage return
*
* 18. \n – newline
*
* 29. \f – form feed
*
*
*/

// 1: So here I will list 6 examples of what some of the string manipulations can do:

// 1.1: .slice(): 

    var brandBike = 'Trek';
    
    var brandBikeSlice = brandBikes.slice(0,1);
    
    console.log(brandBikes);  // => 'rek'    .slice() removed the T Trek
    
// 1.2: .concat():

    var brandBikes = ['Trek', 'Cervelo', 'Giant'];
    
    var moreBrandBikes = ['Huffy', 'BMX'];
    
    var brandBikesConcat = brandBikes.concat(moreBrandBikes);
    
    console.log(brandBikesConcat);  // => ['Trek', 'Cervelo', 'Giant', 'Huffy', 'BMX' ]    .concat() combined both array of strings into 1
    
// 1.3: .split():

    var hiString = "Hi! How fast did you go today?";
    
    var hiStringSplit = hiString.split(' ');
    
    console.log(hiStringSplit);  // => ['Hi!', 'How', 'fast', 'did', 'you', 'go', 'today?']     .split() created an array with the strings in the variable helloString seperated by commas.
    
// 1.4: .length():
    
    var stringBike = 'Trek';
                                                                                                             
    var stringBikeLength = stringBike.length;
                
    console.log(stringBikeLength); // => 4     .length() let us know the length of that string
    
// 1.5: .toUpperCase();

    var littleBike = "trek";
    
    var bigBike = littleBike.toUpperCase();
    
    console.log(bigBike);  // => TREK     .toUpperCase() turned all the lower case letters in the string to upper case

// 1.6: .toLowerCase();

    var bigBike = 'TREK';
    
    var littleBike = bigBike.toLowerCase();
    
    console.log(littleBike); // =. trek     .toLowerCase( turned all the upper case letters in the string to lower case)
    