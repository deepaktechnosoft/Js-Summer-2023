/**
 * String
 *      any value/data within sigle-quotes or double-quotes.
 * 
 *      String-Concept-1.js
 *          length (property)
 *          toUpperCase()
 *          toLowerCase()
 */

let sentence = 'BreAKInG news, laTesT neWs';

/**
 * String stores in memory using indexes.
 * 
 * First character goes into index-0
 * Second character goes into index-1
 * Third character goes into index-2
 * Fourth character goes into index-3
 * ...
 * ...
 * Last character goes into index-last
 * 
 */

/**
 * To find the length of String (or number of characters in the string or number of boxes used in memory to store the string)
 * 
 * property: length
 */
let sentenceLength = sentence.length;

console.log('\nProperty - length');
console.log(`sentence -> ${sentence}`);
console.log(`sentence length -> ${sentenceLength}`);

/**
 *  Length = 26
 *  last Index = 25
 * 
 * 
 *  Apple
 *  Length = 5
 *  last Index = 4
 */

/**
 * Formula to define relation betwene Length and lastIndex:
 * 
 *      lastIndex = length - 1
 * 
 */

// let sentence = 'BreAKInG news, laTesT neWs';
/**
 * To convert a String into Uppercase
 * function: toUpperCase()
 * 
 *      copies the original string-value, and coverts the copied-value into Uppercase and returns the result.
 *      Therefore, this does not change the original string-value
 * 
 */

let sentenceUpperCase = sentence.toUpperCase();
/*
        sentence.toUpperCase();
            copies the original-value
            converts copied-value into UPPERCASE
            returns the UPPERCASED-value
*/
console.log('\nfunction: toUpperCase()');
console.log(`sentence -> ${sentence}`);
console.log(`sentence uppercase -> ${sentenceUpperCase}`);


/**
 * To convert a String into Lowercase
 * function: toLowerCase()
 * 
 *      copies the original string-value, and coverts the copied-value into Lowercase and returns the result.
 *      Therefore, this does not change the original string-value
 * 
 */

let sentenceLowercase = sentence.toLowerCase();
console.log('\nfunction: toLowerCase()');
console.log(`sentence -> ${sentence}`);
console.log(`sentence lowercase -> ${sentenceLowercase}`);