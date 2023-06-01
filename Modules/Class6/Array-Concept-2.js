/**
 * Array:
 *      which can store one or more valiues at any given time.
 *      technically, is an object
 *      represent by []
 * 
 *      -> values in an array is getting stored by the concept on index
 *          first-value gets stored at index-0
 *          second-value gets stored at index-1
 *          third-value gets stored at index-2
 *          fourth-value gets stored at index-3
 *          and so on ...
 */
/** 
 *      Array-Concept-1.js
 *          length (property)
 *      Array-Concept-2.js
 *          Use of []
 *          join()
 *          pop()
 *          shift()
 *          push()
 *          unshift()
 * 
 */

let sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
console.log(`\nsports -> ${sports}`);
// sports is a variable which contains/stores an array-of-string

let digits = [10, 45, 23, 78, 1, 43, 19];
console.log(`\ndigits -> ${digits}`);
// digits is a variable which contains/stores an array-of-number

/**
 * Use of [] with an Array:
 * 
 * 1. To get the value present at any given index
 * 2. To assign the value at a particular index in the array
 */
console.log('\nUse of [] with an Array');

// 1. To get the value present at any given index
console.log('\n1. To get the value present at any given index');
let valueAt2 = sports[2];      // gives the value/data present at index-2 in sports-array
console.log(`\nThe value at index-2 in sports-Array -> ${valueAt2}`);

console.log(`sports[3].toLowerCase() -> ${sports[3].toLowerCase()}`);
console.log(`sports[3].length -> ${sports[3].length}`);

// 2. To assign the value at a particular index in the array
console.log('\n2. To assign the value at a particular index in the array');

sports[1] = "ruNNiNg";      // storing the value (ruNNiNg) at index-1 in sports-Array
console.log(`\nsports -> ${sports}`);

sports[4] = sports[4].toUpperCase();    // change index-4 into uppercase
/*
    sports[4].toUpperCase()
        getting the value from index-4 and copying it and converting into Uppercase
    sports[4] = sports[4].toUpperCase()
        whatever is the result after solving righthand side of = sign, result is going to store at index-4
*/
// sports[4].toUpperCase();                // only print the uppercase-result 
/*
    sports[4].toUpperCase()
        getting the value from index-4 and copying it and converting into Uppercase

*/

console.log(`\nsports -> ${sports}`);


/**
 * Print true/false
 * if last-value in the array has length more than 10
 *      print true
 * otherwise
 *      print false
 * 
 * sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
 * 
 * 
 */
/**
 * 1. find the length of array
 * 2. find last index of array (length - 1)
 * 3. get the value from last-index from array (result a String)
 * 4. calculate length of step-3-result (using length property)
 * 5. compare step-4-result > 10    (result a boolean)
 * 6. print the step-5-result
 */
console.log('\nPrint true/false\nif last-value in the array has length more than 10');
sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl'];

// 1. find the length of array
// 2. find last index of array (length - 1)
let sportsLastIndex = sports.length - 1;

// 3. get the value from last-index from array (result a String)
// 4. calculate length of step-3-result (using length property)
let lastValueLength = sports[sportsLastIndex].length;

// 5. compare step-4-result > 10
let isLastValueLengthGr10 = lastValueLength > 10;

// print the step-5-result
console.log(`\nis last-value in the array has length more than 10 -> ${isLastValueLengthGr10}`);


/**
 * Convert the given word into Titlecase
 * 
 * lAUgh        ->      Laugh
 * heLLo        ->      Hello
 * grEetIngs    ->      Greetings
 */
console.log('\nConvert the given word into Titlecase');
let givenWord = 'grEetIngs';
/**
 * 'lAUgh'
 * 1. convert word into lowercase               'laugh'    
 * 2. use split() into individual letters       ['l', 'a', 'u', 'g', 'h']
 * 3. convert index-0-array into uppercase      ['L', 'a', 'u', 'g', 'h']
 * 4. join all values of array                  Laugh
 */
console.log(`givenWord (before conversion) -> ${givenWord}`);
let givenWord_LowerCase = givenWord.toLowerCase();
let givenWord_Split = givenWord_LowerCase.split('');
givenWord_Split[0] = givenWord_Split[0].toUpperCase();
// join all values of array
let result1 = givenWord_Split.join('');          // Laugh
console.log(`givenWord (after conversion) -> ${result1}`);

/**
 * 'lAUgh'
 * 1. convert word into lowercase               'laugh'
 * 2. get first-letter (use charAt)             'l'
 * 3. convert first-letter into uppercase       'L'
 * 4. get all letters starting from index-1 (use substring)     augh
 * 5. step3-result + step4-result               Laugh
 */
console.log('\nAnother method');
console.log(`givenWord (before conversion) -> ${givenWord}`);
let givenWord_LowerCase1 = givenWord.toLowerCase();
let firstLetter_U = givenWord_LowerCase1.charAt(0).toUpperCase();
let fromIndex1 = givenWord_LowerCase1.substring(1);
let result2 = firstLetter_U + fromIndex1;
console.log(`givenWord (after conversion) -> ${result2}`);

sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl'];

/**
 * To join all values of an array and make it a string
 * function: join()
 * input: string (separator)
 * return: string
 * 
 * if user does NOT input the separator, all array-values are going to be joined using default-separator(comma)
 * if user does input the separator, all array-values are going to be joined using user-defined-separator
 */
console.log('\nfunction - join()');
console.log(`sports -> ${sports}`);

let sportsJoin = sports.join();                     // FootBall,SoCCer,GOLf,HocKEy,MaraTHon,RuGBy,BasketBaLl
console.log(`sportsJoin -> ${sportsJoin}`);
console.log(`typeof sportsJoin -> ${typeof sportsJoin}`);

let sportsJoin2 = sports.join('&&');                // FootBall&&SoCCer&&GOLf&&HocKEy&&MaraTHon&&RuGBy&&BasketBaLl
console.log(`sportsJoin2 -> ${sportsJoin2}`);

let sportsJoin3 = sports.join(' ');                 // FootBall SoCCer GOLf HocKEy MaraTHon RuGBy BasketBaLl
console.log(`sportsJoin3 -> ${sportsJoin3}`);


digits = [10, 45, 23, 78, 1, 43, 19];
console.log(`\ndigits -> ${digits}`);
let digitsJoin1 = digits.join('**');                // 10**45**23**78**1**43**19
console.log(`digitsJoin1 -> ${digitsJoin1}`);

/**
 * To remove a value from array
 * function: pop()
 *      removes the last-value from the array
 *          OR
 *      removes the value present at last-index in the array
 * return: the removed value
 * 
 * 
 * function: shift()
 *      removes the first-value from the array
 *          OR
 *      removes the value present at 0-index in the array
 * return: the removed value
 * 
 * to remove value from array
 *      pop() vs shift() vs splice()
 * 
 * 
 * NOTE: the function changes the original array
 */

console.log('\n\nfunction - pop()');
console.log(`sports -> ${sports}`);             // sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl'];
console.log(`digits -> ${digits}`);             // digits = [10, 45, 23, 78, 1, 43, 19];

let sportsPop1 = sports.pop();                  // 'BasketBaLl'
console.log(`Removed value -> ${sportsPop1}`);
console.log(`sports -> ${sports}`);             // sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy']


let sportsPop2 = sports.pop();                  // 'RuGBy'
console.log(`Removed value -> ${sportsPop2}`);
console.log(`sports -> ${sports}`);             // sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon']



console.log('\n\nfunction - shift()');
console.log(`sports -> ${sports}`);             // sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon'];
console.log(`digits -> ${digits}`);             // digits = [10, 45, 23, 78, 1, 43, 19];

let sportsShift1 = sports.shift();              // FootBall
console.log(`Removed value -> ${sportsShift1}`);
console.log(`sports -> ${sports}`);             // sports = ['SoCCer', 'GOLf', 'HocKEy', 'MaraTHon'];

let sportsShift2 = sports.shift();              // SoCCer
console.log(`Removed value -> ${sportsShift2}`);
console.log(`sports -> ${sports}`);             // sports = ['GOLf', 'HocKEy', 'MaraTHon'];


let digitsShift1 = digits.shift();              // 10
console.log(`Removed value -> ${digitsShift1}`);
console.log(`digits -> ${digits}`);             // digits = [45, 23, 78, 1, 43, 19];

let digitsPop1 = digits.pop();                  // 19
console.log(`Removed value -> ${digitsPop1}`);
console.log(`digits -> ${digits}`);             // digits = [45, 23, 78, 1, 43];

/**
 * Remove last two values from the given array
 */
console.log('\n\nRemove last two values from the given array');
let givenArray = ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer'];
console.log(`Given array (before removing) -> ${givenArray}`);          // ['EaRTh', 'MerCUrY', 'MaRS', 'JuPITer']

givenArray.pop();
givenArray.pop();

console.log(`Given array (after removing) -> ${givenArray}`);           // ['EaRTh', 'MerCUrY']


/**
 * To add values in an array
 * function: push()
 *      adds the new-value at the END of array
 * input: value to add
 * return: the new-length of array
 * 
 * function: unshift()
 *      adds the new-value at the beginning of array
 * input: value to add
 * return: the new-length of array
 * 
 * to add value in an array
 *      push() vs unshift() vs splice() vs concat()
 * 
 * NOTE: the function changes the original array
 */

sports = ['GOLf', 'HocKEy', 'MaraTHon'];
digits = [45, 23, 78, 1, 43];

console.log('\nfunction - push()');
console.log(`sports -> ${sports}`);                                     // sports = ['GOLf', 'HocKEy', 'MaraTHon']
console.log(`digits -> ${digits}`);                                     // digits = [45, 23, 78, 1, 43]

let sportsNewLength1 = sports.push('BadMinTon');                        // 4
console.log(`New lngth after push() -> ${sportsNewLength1}`);
console.log(`sports -> ${sports}`);                                     // sports = ['GOLf', 'HocKEy', 'MaraTHon', 'BadMinTon']

let sportsNewLength2 = sports.push('sKaTes');                           // 5
console.log(`New lngth after push() -> ${sportsNewLength2}`);
console.log(`sports -> ${sports}`);                                     // sports = ['GOLf', 'HocKEy', 'MaraTHon', 'BadMinTon', 'sKaTes']


console.log('\nfunction - unshift()');
console.log(`sports -> ${sports}`);                                     // sports = ['GOLf', 'HocKEy', 'MaraTHon', 'BadMinTon', 'sKaTes']
console.log(`digits -> ${digits}`);                                     // digits = [45, 23, 78, 1, 43]

let sportsNewLength3 = sports.unshift('jUmPing');                       // 6
console.log(`New length after unshift() -> ${sportsNewLength3}`);
console.log(`sports -> ${sports}`);                                     // sports = ['jUmPing', 'GOLf', 'HocKEy', 'MaraTHon', 'BadMinTon', 'sKaTes']

let sportsNewLength4 = sports.unshift('iCe HocKEy');                    // 7
console.log(`New length after unshift() -> ${sportsNewLength4}`);
console.log(`sports -> ${sports}`);                                     // sports = ['iCe HocKEy', 'jUmPing', 'GOLf', 'HocKEy', 'MaraTHon', 'BadMinTon', 'sKaTes']

/**
 * Convert the given 4-word sentence into Titlecase
 * 
 * 'You liVe OnlY oncE'     ->      'You Live Only Once'
 * 'gooD MorninG to YOu'    ->      'Good Morning To You'
 * 
 */
