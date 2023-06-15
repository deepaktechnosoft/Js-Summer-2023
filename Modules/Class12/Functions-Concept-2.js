/**
 * Functions
 *      set of code to perform a specific task
 * 
 * 
 * Before we create a function:
 *  1. what is the purpose of the function?
 *      This helps with the function-name
 * 
 *  2. Do I need any input from user?
 *      If yes,
 *          a) how many input we need from user?
 * 
 *  3. Should the function return any value/data back to user?
 *      If yes, 
 *          make sure to write return-statement as the LAST line in the function
 *      otherwise,
 *          NO return statement in the function
 * 
 * 
 * 
 * Syntax to create a function:
 * 
 * #1:
 * function funcName (<inputParameters>) {
 *      code to perform
 *      the specific task
 *      return statement    --> ONLY IF we are planning to return value/data back to user
 * }
 * 
 * 
 * funcName -> function-name (it should be related to the urpose of the function -- Q1)
 * 
 * inputParameters -> Q2
 *      if we need input form user
 *          we need to create variable in the parenthesis to store userInput 
 *      otherwise
 *          parenthesis will be empty
 * 
 * 
 * #2: Function Expression
 * let funcName = function(<inputParameters>) {
 *      code to perform
 *      the specific task
 *      return statement    --> ONLY IF we are planning to return value/data back to user
 * }
 * 
 * 
 * #3: Arrow Function
 * let funcName = (<inputParameters>) => {
 *      code to perform
 *      the specific task
 *      return statement    --> ONLY IF we are planning to return value/data back to user
 * }
 * 
 * 
 */

/**
 * Create a function to print all words from the given sentence having length>5 and contains 'i or I'
 */
/**
 * "Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture"
 * 
 * "Go", "to", "NBCNews.com", "for", "breaking news,", "videos,", "and", "the", "latest", "top", "stories", "in", "world news,", "business,", "politics,", "health", "and", "pop", "culture"
 */
const userSentence = 'Go to NBCNews.com for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture';
// const userSentence_WordsArray = userSentence.split(' ');
// for (const word of userSentence_WordsArray) {
//     if (word.length > 5 && word.toLowerCase().includes('i')) {
//         console.log(word);
//     }
// }
func1(userSentence);

console.log('\n\n');
func1("breaking news headlines of the day")


function func1(userSentence) {
    const userSentence_WordsArray = userSentence.split(' ');
    for (const word of userSentence_WordsArray) {
        if (word.length > 5 && word.toLowerCase().includes('i')) {
            console.log(word);
        }
    }
}

let func2 = function(userSentence) {
    const userSentence_WordsArray = userSentence.split(' ');
    for (const word of userSentence_WordsArray) {
        if (word.length > 5 && word.toLowerCase().includes('i')) {
            console.log(word);
        }
    }
}
console.log('\nUsing func2()\n');
func2("breaking news headlines of the day");




/**
 * Create a function to convert any given sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu ONlY lIVe ONcE' ->  'You Only Live Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 'heLlO deAR, haVE a great DAy tO yOu' -> 'Hello Dear, Have A Great Day To You'
 * 'qUEen' -> 'Queen'
 * 
 */
/*
    'YOu ONlY lIVe ONcE' ->  'You Only Live Once'

    convert given sentence into lowercase   'you only live once'
    split lowercase-value by ' '            ['you', 'only', 'live', 'once']
    index-0-value   'you'
        apply charAt(0) -> 'y' -> toUppercase() -> 'Y'
        slice(1) -> 'ou'
        'Y' + 'ou' -> 'You'
        replace index-0-value with 'You'    -> ['You', 'only', 'live', 'once']
    index-1-value   'only'
        apply charAt(0) -> 'o' -> toUppercase() -> 'O'
        slice(1) -> 'nly'
        'O' + 'nly' -> 'Only'
        replace index-1-value with 'Only'   -> ['You', 'Only', 'Live', 'Once']


*/
console.log('\nCreate a function to convert any given sentence into Titlecase');
const userInput = 'heLlO deAR, haVE a great DAy tO yOu';
const result = toTitleCase(userInput);
console.log(`\nuserInput -> ${userInput}`);
console.log(`result -> ${result}`);

const result2 = toTitleCase('have a great day');
console.log(`\nuserInput -> ${'have a great day'}`);
console.log(`result2 -> ${result2}`);


const result3 = toTitleCase('qUEen');
console.log(`\nuserInput -> ${'qUEen'}`);
console.log(`result3 -> ${result3}`);



function toTitleCase(input) {
    const userInput_L = input.toLowerCase();
    const arrayFromUserInput = userInput_L.split(' ');
    
    for (let i=0 ; i < arrayFromUserInput.length ; i++) {
        arrayFromUserInput[i] = arrayFromUserInput[i].charAt(0).toUpperCase() + arrayFromUserInput[i].slice(1);
    }
    const userInput_TitleCase = arrayFromUserInput.join(' ');
    return userInput_TitleCase;
}


let toTitleCase2 = function (input) {
    const userInput_L = input.toLowerCase();
    const arrayFromUserInput = userInput_L.split(' ');
    
    for (let i=0 ; i < arrayFromUserInput.length ; i++) {
        arrayFromUserInput[i] = arrayFromUserInput[i].charAt(0).toUpperCase() + arrayFromUserInput[i].slice(1);
    }
    const userInput_TitleCase = arrayFromUserInput.join(' ');
    return userInput_TitleCase;
}

let toTitleCase3 = (input) => {
    const userInput_L = input.toLowerCase();
    const arrayFromUserInput = userInput_L.split(' ');
    
    for (let i=0 ; i < arrayFromUserInput.length ; i++) {
        arrayFromUserInput[i] = arrayFromUserInput[i].charAt(0).toUpperCase() + arrayFromUserInput[i].slice(1);
    }
    const userInput_TitleCase = arrayFromUserInput.join(' ');
    return userInput_TitleCase;
}

console.log('\n\nUsing toTitleCase3()');
const result3_1 = toTitleCase3(userInput);
console.log(`\nuserInput -> ${userInput}`);
console.log(`result3_1 -> ${result3_1}`);

const result3_2 = toTitleCase3('have a great day');
console.log(`\nuserInput -> ${'have a great day'}`);
console.log(`result3_2 -> ${result3_2}`);


const result3_3 = toTitleCase3('qUEen');
console.log(`\nuserInput -> ${'qUEen'}`);
console.log(`result3_3 -> ${result3_3}`);

function addNum2(num1, num2) {
    return num1 + num3;
}

/**
 * Convert all array values into Uppercase, and store final result into new-array
 */
console.log('\n\nConvert all array values into Uppercase, and store final result into new-array\n');
const planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
let planetsUpperCase = [];
for (let planetName of planets) {
    planetsUpperCase.push(planetName.toUpperCase());
}
console.log(planets);               // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
console.log(planetsUpperCase);      // [ 'EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER' ]


console.log('\n\nfind the words from given array which are having length>5 and contains i or I\n');
const userArray = ["Go", "to", "NBCNews.com", "for", "breaking", "news,", "videos,", "and", "the", "latest", "top", "stories", "in", "world news,", "business,", "politics,", "health", "and", "pop", "culture"];
// find the words from given array which are having length>5 and contains i or I
let resultArray = [];

for (const word of userArray) {
    if (word.length>5 && word.toLowerCase().includes('i')) {
        resultArray.push(word)
    }
}
console.log(userArray);
console.log(resultArray);



/**
 * Find the first array value which is divisible by 7
 */
console.log('\n\nFind the first array value which is divisible by 7\n');
const numbers = [90, 56, 87, 32, 12, 68];
let ans;

for (let num of numbers) {
    if (num%7 == 0) {
        ans = num;
        break;
    }
}
console.log(numbers);
console.log(ans);









