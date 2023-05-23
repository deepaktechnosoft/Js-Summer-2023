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
 *          
 */

let sentence = 'BreAKInG news, laTesT neWs';

/**
 * To find if the given String starts with given pattern
 * function: startsWith()
 * input: pattern (String)
 * return: boolean
 * 
 * if the String starts EXACTLY with the given pattern
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */
console.log('\nfunction: startsWith()');
let isStartsWith_Br = sentence.startsWith('Br');
console.log(`is sentence start with "Br" -> ${isStartsWith_Br}`);

let isStartsWith_BreAk = sentence.startsWith('BreAk');
console.log(`is sentence start with "BreAk" -> ${isStartsWith_BreAk}`);

let isStartsWith_Br_ = sentence.startsWith('Br ');
console.log(`is sentence start with "Br " -> ${isStartsWith_Br_}`);

let isStartsWith_news = sentence.startsWith('news');
console.log(`is sentence start with "news" -> ${isStartsWith_news}`);


/**
 * To find if the given String ends with given pattern
 * function: endsWith()
 * input: pattern (String)
 * return: boolean
 * 
 * if the String ends EXACTLY with the given pattern
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */

console.log('\nfunction: endsWith()');
let endsWith_newS = sentence.endsWith('newS');                          // false
console.log(`is sentence ends with "newS" -> ${endsWith_newS}`);

let isEndsWith__ = sentence.endsWith(' ');                              // false
console.log(`is sentence ends with " " -> ${isEndsWith__}`);

let isEndsWith_t_neWs = sentence.endsWith('t neWs');                    // false
console.log(`is sentence ends with "t neWs" -> ${isEndsWith_t_neWs}`);

let isEndsWith_laTesT_neWs = sentence.endsWith('laTesT neWs');          // true
console.log(`is sentence ends with "laTesT neWs" -> ${isEndsWith_laTesT_neWs}`);

/**
 * Find if the given statment ends with "go" (ignoring cases)
 */
let statement = 'go dear doGo';
let pattern = "GO";
console.log('\nFind if the given statment ends with "go" (ignoring cases)');
/*
    Pseudo Code / Logic
    1. convert statement and pattern in lowercase
    2. on statement-lowercase apply endsWith function using pattern-lowercase
*/
// 1. convert statement and pattern in lowercase
let statementLowercase = statement.toLowerCase();
let patternLowercase = pattern.toLowerCase();

// 2. on statement-lowercase apply endsWith function using pattern-lowercase
let isStatementEndsWith_go = statementLowercase.endsWith(patternLowercase);
console.log(`statement -> ${statement}`);
console.log(`is the given statment ends with "${pattern}" (ignoring cases) -> ${isStatementEndsWith_go}`);

/**
 * To find if a String contains a given pattern
 * function: includes()
 * input: pattern
 * return: boolean
 * 
 * if the String EXACTLY contains/includes the given pattern
 *      function returns true
 * otherwise
 *      function returns false
 */
console.log(`\nsentence -> ${sentence}`);

console.log('\nfunction: includes()');

let isIncludes_K = sentence.includes('K');
console.log(`is sentence contain "K" -> ${isIncludes_K}`);

let isIncludes_news = sentence.includes('news');
console.log(`is sentence contain "news" -> ${isIncludes_news}`);

let isIncludes__ = sentence.includes(' ');
console.log(`is sentence contain " " -> ${isIncludes__}`);

let isIncludes_KInG = sentence.includes('KInG');
console.log(`is sentence contain "KInG" -> ${isIncludes_KInG}`);

let isIncludes_KIng = sentence.includes('KIng');
console.log(`is sentence contain "KIng" -> ${isIncludes_KIng}`);


/**
 * To join/concatenate two or more Strings
 * function: concat()
 * 
 * function will join/attach the given Strings together,
 * and return the combined-String
 * 
 */
console.log('\nfunction: concat()');

let str1="hello", str2= " ", str3="world", str4="great emperor";
console.log(`str1 -> ${str1}`);
console.log(`str2 -> ${str2}`);
console.log(`str3 -> ${str3}`);
console.log(`str4 -> ${str4}`);

let str = str1.concat(str2, str3, str2, str4, str2, str3);        // hello world great emperor world
console.log(`\nstr1.concat(str2, str3, str2, str4, str2, str3) -> ${str}`);

let strr = str1+str2+str3+str2+str4+str2+str3;
console.log(`\nstr1+str2+str3+str2+str4+str2+str3 -> ${strr}`);


/**
 * To remove extra spaces:
 *      before the first-character in the String
 *      and, after the last-character in the String
 * function: trim()
 * 
 *      copies the original string-value, and removes the extra spaces and returns the result.
 *      Therefore, this does NOT change the original string-value
 * 
 * 
 */
console.log('\nfunction: trim()');

let myString = '   king   queen    go for    a walk  in     the     kingdom    ';
let myString_afterTrim = myString.trim();


console.log(`myString -> +${myString}+`);
console.log(`myString_afterTrim -> +${myString_afterTrim}+`);

sentence = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';

/**
 * To find the character present at any given index
 * function: charAt()
 * input: indexNum
 * return: String
 * 
 * if the index is valid
 *      function returns the character present at the given index
 * otherwise
 *      function returns empty String
 */
console.log('\nfunction: charAt()');
console.log(`sentence -> ${sentence}`);

let charAt2 = sentence.charAt(2);                   // m
console.log(`char at index-2 : ${charAt2}`);

let charAt19 = sentence.charAt(19);
console.log(`char at index-19 : ${charAt19}`);

let charAt_1 = sentence.charAt(-1);                 // invalid index
console.log(`char at index-(minus-1) : ${charAt_1}`);

let charAt_150 = sentence.charAt(150);              // out of range
console.log(`char at index-150 : ${charAt_150}`);


/**
 * Print the last character of the given String
 * 
 */
console.log('\nPrint the last character of the given String');
let inputStr = 'CompreheNSIVe UP-to-DATE neW';
/*
    1. find length
    2. find last-Index
    3. use charAt() with last-index
*/
console.log(`inputStr -> ${inputStr}`);
let inputStrLength = inputStr.length;
let inputStr_LastIndex = inputStrLength - 1;
let inputStr_LastCharacter = inputStr.charAt(inputStr_LastIndex);
console.log(`the last character of the given String -> ${inputStr_LastCharacter}`);

/**
 * To find the index from which FIRST OCCURRENCE of given pattern starts
 * function: indexOf()
 * input: pattern
 * return: indexNum
 * 
 * if the EXACT pattern is found
 *      function returns the index from which FIRST OCCURRENCE of given pattern starts
 * otherwise
 *      function returns -1
 * 
 */
console.log('\nfunction: indexOf()');
sentence = 'CompreheNSIVe UP-to-DATE neWs frOM soURCeS GOOgle DATE NeWs CompreheNSIVe CoverAgE, aggRegateD alL oVeR tHE DATE wORld by frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

let indexOf_e = sentence.indexOf('e');                                      // 5
console.log(`Index of 'e' -> ${indexOf_e}`);

let indexOf_Com = sentence.indexOf('Com');                                  // 0
console.log(`Index of 'Com' -> ${indexOf_Com}`);

let indexOf_DATE = sentence.indexOf('DATE');                                // 20
console.log(`Index of 'DATE' -> ${indexOf_DATE}`);

let indexOf_Comprehensive = sentence.indexOf('Comprehensive');              // 0
console.log(`Index of 'Comprehensive' -> ${indexOf_Comprehensive}`);

let indexOf_agg = sentence.indexOf('agg');                                  // 84
console.log(`Index of 'agg' -> ${indexOf_agg}`);


/**
 * To find the index from which LAST OCCURRENCE of given pattern starts
 * function: lastIndexOf()
 * input: pattern
 * return: indexNum
 * 
 * if the EXACT pattern is found
 *      function returns the index from which LAST OCCURRENCE of given pattern starts
 * otherwise
 *      function returns -1
 * 
 */

console.log('\nfunction: lastIndexOf()');
sentence = 'CompreheNSIVe UP-to-DATE neWs frOM soURCeS GOOgle DATE NeWs CompreheNSIVe CoverAgE, aggRegateD alL oVeR tHE DATE wORld by frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

let lastIndexOf_e = sentence.lastIndexOf('e');                                      // 165
console.log(`Last index of 'e' -> ${lastIndexOf_e}`);

let lastIndexOf_Com = sentence.lastIndexOf('Com');                                  // 60
console.log(`Last index of 'Com' -> ${lastIndexOf_Com}`);

let lastIndexOf_DATE = sentence.lastIndexOf('DATE');                                // 108
console.log(`Last index of 'DATE' -> ${lastIndexOf_DATE}`);

let lastIndexOf_Comprehensive = sentence.lastIndexOf('Comprehensive');              // -1
console.log(`Last index of 'Comprehensive' -> ${lastIndexOf_Comprehensive}`);

let lastIndexOf_agg = sentence.lastIndexOf('agg');                                  // 84
console.log(`Last index of 'agg' -> ${lastIndexOf_agg}`);

/**
 * To replace a pattern with another pattern in a String
 * function: replace()
 * input: patternToReplace, patternToReplaceWith
 * return: String
 * 
 *      copies the original string-value, and replace the EXACT patternToReplace in the copied-value and return the result.
 *      Therefore, this does not change the original string-value
 * 
 *      -> by default, function replaces ONLY the first occurrence.
 *      -> To replace ALL occurrences, we should use g-flag
 *      -> To replace with ignoring cases, we should use i-flag
 * 
 * 
 */
console.log('\nfunction: replace()');
sentence = 'CompreheNSIVe UP-to-DATE neWs frOM soURCeS GOOgle DATE NeWs CompreheNSIVe CoverAgE, aggRegateD alL oVeR tHE DATE wORld by frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
console.log(`sentence -> ${sentence}`);

let sentence_Replace_m_X = sentence.replace('m', 'X');
console.log(`\nsentence after replace 'm' with 'X' -> ${sentence_Replace_m_X}`);


let sentence_Replace_ALL_m_X = sentence.replace(/m/g, 'X');
console.log(`\nsentence after replace all 'm' with 'X' -> ${sentence_Replace_ALL_m_X}`);

let sentence_Replace_ALL_mM_X = sentence.replace(/m/gi, 'X');
console.log(`\nsentence after replace all 'm' (ignoring cases) with 'X' -> ${sentence_Replace_ALL_mM_X}`);



/**
 * To compare if two strings are equal to each other
 * function: localeCompare()
 * input: String you want to compare with
 * return: number
 * 
 * If Strings are identical             ->      function returns 0
 * If String is greater than another    ->      function returns 1
 * If String is lesser than another     ->      function returns -1
 * 
 */
console.log('\nfunction: localeCompare()');

let sentence1 = "new YoRk CItY", sentence2 = "NEW York City";

let localeCompareResult = sentence1.localeCompare(sentence2);
console.log(`sentence1 -> ${sentence1}`);
console.log(`sentence2 -> ${sentence2}`);
console.log(`localeCompare result -> ${localeCompareResult}`);

