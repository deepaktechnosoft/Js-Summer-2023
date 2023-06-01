/**
 * Convert the given 4-word sentence into Titlecase
 * 
 * 'You liVe OnlY oncE'     ->      'You Live Only Once'
 * 'gooD MorninG to YOu'    ->      'Good Morning To You'
 * 
 */

/**
 * 1. convert input string into lowercase
 * 2. calculate which index we should uppercase
 * 3. create another variable to store " "
 * 4. Join al
 */

/**
 * 1. use charAt() to convert index-0 into uppercase()
 * 2. use replace(), first-letter intp uppercase
 * 3. 
 * 
 */

/**
 * 1. convert input-string into lowercase
 * 2. use split to split by spaces
 * 2. pick index-0-value from array
 * 3. convert first-letter into uppercase
 * 
 * 2. pick index-1-value from array
 * 3. convert first-letter into uppercase
 * 
 * 2. pick index-2-value from array
 * 3. convert first-letter into uppercase
 * 
 * 2. pick index-3-value from array
 * 3. convert first-letter into uppercase
 * 
 */
console.log('Convert the given 4-word sentence into Titlecase\n');
inputStr = 'gooD MorninG to YOu';
let inputStr_Lowercase = inputStr.toLowerCase();                // 'you live only once'

let inputStr_Array = inputStr_Lowercase.split(' ');             // ['you', 'live', 'only', 'once']

let firstLetter_0_Uppercase = inputStr_Array[0].charAt(0).toUpperCase();                        // 'Y'
inputStr_Array[0] = firstLetter_0_Uppercase + inputStr_Array[0].substring(1);                   // 'Y' + 'ou' = 'You'   ->  ['You', 'live', 'only', 'once']

let firstLetter_1_Uppercase = inputStr_Array[1].charAt(0).toUpperCase();                        // 'L'
inputStr_Array[1] = firstLetter_1_Uppercase + inputStr_Array[1].substring(1);                   // 'L' + 'ive' = 'Live'   ->  ['You', 'Live', 'only', 'once']

let firstLetter_2_Uppercase = inputStr_Array[2].charAt(0).toUpperCase();                        // 'O'
inputStr_Array[2] = firstLetter_2_Uppercase + inputStr_Array[2].substring(1);                   // 'O' + 'nly' = 'Only'   ->  ['You', 'Live', 'Only', 'once']

let firstLetter_3_Uppercase = inputStr_Array[3].charAt(0).toUpperCase();                        // 'O'
inputStr_Array[3] = firstLetter_3_Uppercase + inputStr_Array[3].substring(1);                   // 'O' + 'nce' = 'Once'   ->  ['You', 'Live', 'Only', 'Once']

let outputStr = inputStr_Array.join(' ');

console.log(`inputStr -> ${inputStr}`);
console.log(`outputStr -> ${outputStr}`);

