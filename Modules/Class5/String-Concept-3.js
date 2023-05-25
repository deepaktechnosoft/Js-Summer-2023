/**
 * String
 *      any value/data within sigle-quotes or double-quotes.
 * 
 *      String-Concept-1.js
 *          length (property)
 *          toUpperCase()
 *          toLowerCase()
 *      String-Concept-2.js
 *          startsWith()
 *          endsWith()
 *          includes()
 *          concat()
 *          trim()
 *          charAt()
 *          indexOf()
 *          lastIndexOf()
 *          replace()
 *          localeCompare()
 *      String-Concept-3.js
 *          substring(), slice(), substr()
 *          split()
 *          
 */



/**
 * To extract a portion from a String
 * function: substring() / slice() / substr()
 * 
 * 
 * 'BreAKInG news, laTesT neWs'
 * give me string from index-2 to index-5 (excluding index-5) : 'eAK'
 * 
 * give me string from index-1 to index 10 (excluding index-10) : 'reAKInG n'
 * 
 * give me string from index-4 : 'KInG news, laTesT neWs'
 * 
 * give me the character present at index-7
 * give me string from index-7 to index 8 (excluding index-8) : G
 * 
 * 
 */
/**
 * To extract a part of a given string using index values
 * function: substring()
 * 
 * input: startIndex, endIndex
 * return: function returns the portion of String starting from startIndex upto endIndex (excluding endIndex)
 * 
 * 
 * 
 * input: startIndex
 * return: function returns the portion of String starting from startIndex upto end
 * 
 *      if endIndex is missing or invalid           ->      function returns from startIndex upto end
 *      if startIndex AND endIndex are invalid      ->      function returns empoty string
 *      if startIndex is invalid                    ->      function returns from index-0 to endIndex (excluding endIndex)
 *      
 * 
 *      copies the original string-value, and extract the portion from copied-value based on given index value(s) and return the result.
 *      Therefore, this does not change the original string-value
 * 
 */
console.log('\nfunction: substring()');
let sentence = 'BreAKInG news, laTesT neWs';

console.log(`sentence -> ${sentence}`);

let subString_2_5 = sentence.substring(2, 5);
console.log(`subString_2_5 -> ${subString_2_5}`);

let subString_1_10 = sentence.substring(1, 10);
console.log(`subString_1_10 -> ${subString_1_10}`);

let subString_4 = sentence.substring(4);
console.log(`subString_4 -> ${subString_4}`);

let subString_7_8 = sentence.substring(7, 8);
console.log(`subString_7_8 -> ${subString_7_8}`);

// if endIndex is invalid   -> function returns upto end
let subString_4_900 = sentence.substring(4, 900);
console.log(`subString_4_900 -> ${subString_4_900}`);

// if startIndex AND endIndex are invalid
let subString__10__3 = sentence.substring(-10, -3);
console.log(`subString__10__3 -> ${subString__10__3}`);

// is startIndex is invalid
let subString__2_10 = sentence.substring(-2, 10);
console.log(`subString__2_10 -> ${subString__2_10}`);


/**
 * To split a given string into multiple string values
 * function: split()
 * input: pattern from wher to cut the string
 * return: Araay of String
 * 
 * if the given pattern EXACTLY found in the string, function is going to split the string from all those points, and return the result.
 * 
 *      copies the original string-value, and split the copied-value based on given pattern and return the result.
 *      Therefore, this does not change the original string-value
 * 
 */
sentence = 'BreAKInG nEWs, laTESt neWs';

console.log('\nfunction: split()');
console.log(`sentence -> ${sentence}`);

let splitBy_e = sentence.split('e');                // [ 'Br', 'AKInG nEWs, laTESt n', 'Ws' ]
console.log(`splitBy_e -> ${splitBy_e}`);
console.log(splitBy_e);

let splitBy__ = sentence.split(' ');                // [ 'BreAKInG', 'nEWs,', 'laTESt', 'neWs' ]
console.log(`\nsplitBy__ -> ${splitBy__}`);
console.log(splitBy__);

let splitBy_nothing = sentence.split(''); 
console.log(`\nsplitBy_nothing -> ${splitBy_nothing}`);
console.log(splitBy_nothing);

let splitBy_TE = sentence.split('TE');              // [ 'BreAKInG nEWs, la', 'St neWs' ]
console.log(`\nsplitBy_TE -> ${splitBy_TE}`);
console.log(splitBy_TE);


/**
 * How many words are in the newsSentence
 */
let newsSentence = "View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN.com";
/**
 * 1. split newsSentence by space
 * 2. find the length of array (got from step-1)
 */
console.log('\n\nHow many words are in the newsSentence');
console.log(`newsSentence -> ${newsSentence}`);
// 1. split newsSentence by space
let newsSentence_Split = newsSentence.split(' ');

// 2. find the length of array (got from step-1)
let numOfWords = newsSentence_Split.length;

console.log(`Number of words in the newsSentence -> ${numOfWords}`);

/**
 * Print true if user can given only forst-name and last-name in userName variable
 * otherwise, print false
 * 
 * userName = 'John Doe';           ->  true
 * userName = 'John';               ->  false
 * userName = 'John Doe William';   ->  false
 * userName = ''                    ->  false
 * 
 */
let userName = '';