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
 *          
 */

/**
 * In a given string, find the index of first occurrence of "HE" starts
 * NOTE: Pls ignore the case
 */
let inputString = 'CompreheNSIVe UP-to-DATE neWs CoverAgE, aggRegateD frOM soURCeS alL oVeR tHE wORld by GOOgle NeWs.';
/*
    Pseudo Code

    1. convert inputString into lowercase
    2. using indexOf 

*/
console.log('\nQ1: In a given string, find the index of first occurrence of "HE" starts (ignoring cases)');
// 1. convert inputString, pattern into lowercase
let pattern = 'HE';
let inputString_Lowercase = inputString.toLowerCase();
let pattern_Lowercase = pattern.toLowerCase();

// 2. using indexOf
let indexOf_HE = inputString_Lowercase.indexOf(pattern_Lowercase);
console.log(`Index of 'HE' -> ${indexOf_HE}`);

/**
 * Verify if two given strings are equal to each other (identical when ignoring cases)
 * Print true/false if str1 and str2 are equal to each other
 * 
 * heLlO
 * Hello
 * 
 */
/*
    Pseudo Code
    1. converting str1 and str2 into lowercase
    2. str1-L.localeCompare(str2-L)
    3. result of #2 === 0
    4. print the result of #3
*/
console.log('\n\nQ2: Verify if two given strings are equal to each other (identical when ignoring cases)');
let str1 = 'come to my house for a party';
let str2 = 'cOMe To my hOUse FOR a pARt';

// 1. converting str1 and str2 into lowercase
let str1_L = str1.toLowerCase();
let str2_L = str2.toLowerCase();

// 2. str1-L.localeCompare(str2-L)
let localeCompareResult = str1_L.localeCompare(str2_L);

// 3. result of #2 === 0
let isEqual = localeCompareResult === 0;

// 4. print the result of #3
console.log(`str1 -> ${str1}`);
console.log(`str2 -> ${str2}`);
console.log(`are two given strings equal to each other (identical when ignoring cases) -> ${isEqual}`);

/**
 * Print ans as true/false
 * 
 * Verify "oNe" appears only once in the given sentence (ignoring the cases)
 * if the "oNe" present only once, print true ; otherwise print false.
 * 
 */
let inputStr = 'giVE onEme a ONE pEn';
/*
    1. convert inputStr, 'oNe' into lowercase
    2. using indexOf, find the index of first occurrence of 'oNe'
    3. using lastIndexOf, find the last-index of first occurrence of 'oNe'
    4. if result-of-#2 === result-of-#3, 'oNe' present only once; otherwise more than once.
*/
console.log('\n\nVerify "oNe" appears only once in the given sentence (ignoring the cases)');
// 1. convert inputStr into lowercase
let patternStr = 'oNe';
let inputStr_L = inputStr.toLowerCase();
let patternStr_L = patternStr.toLowerCase();

// 2. using indexOf, find the index of first occurrence of 'oNe'
let indexOf_result = inputStr_L.indexOf(patternStr_L);                  // -1

// 3. using lastIndexOf, find the last-index of first occurrence of 'oNe'
let lastIndexOf_result = inputStr_L.lastIndexOf(patternStr_L);          // -1

// 4. if result-of-#2 === result-of-#3, 'oNe' present only once; otherwise more than once.
/*
    want to print true
        when, indexOf_result, lastIndexOf_result are equal to each other AND lastIndexOf_result NOT equal to -1 AND indexOf_result NOT equal to -1
*/
let isOnce_oNe = indexOf_result === lastIndexOf_result && lastIndexOf_result !== -1 && indexOf_result !== -1;
console.log(`inputStr -> ${inputStr}`);
console.log(`"oNe" appears only once in the given sentence (ignoring the cases) -> ${isOnce_oNe}`);

