/**
 * Create a function to convert any given sentence into Titlecase
 */
function toTitleCase(input) {
    const userInput_L = input.toLowerCase();
    const arrayFromUserInput = userInput_L.split(' ');
    
    for (let i=0 ; i < arrayFromUserInput.length ; i++) {
        arrayFromUserInput[i] = arrayFromUserInput[i].charAt(0).toUpperCase() + arrayFromUserInput[i].slice(1);
    }
    const userInput_TitleCase = arrayFromUserInput.join(' ');
    return userInput_TitleCase;
}

/**
 * Create a function to print all words from the given sentence having length>5 and contains 'i or I'
 */
function printWord(userSentence) {
    const userSentence_WordsArray = userSentence.split(' ');
    for (const word of userSentence_WordsArray) {
        if (word.length > 5 && word.toLowerCase().includes('i')) {
            console.log(word);
        }
    }
}

/**
 * Create a function which can generate abbreviation for any string-value
 * 
 * good Morning -> GM
 * happy NEW Year -> HNY
 */
function generateAbbreviation(userInputStr) {
    let result = '';
    const userInputStrArray = userInputStr.split(' ');

    for (const word of userInputStrArray) {
        let charAt0 = word.charAt(0);
        let charAt0_U = charAt0.toUpperCase();
        result = result + charAt0_U;
    }

    return result;
}


/**
 * Create a function to find max value from a given number-array
 */
function findMaxInArray(inputArray) {
    let max = inputArray[0];
    for (let index=1 ; index <= inputArray.length-1 ; index++) {
        if (inputArray[index] > max) {
            max = inputArray[index];
        }
    }
    return max;
}

/**
 * Create a function to print Hello
 */
function printHello() {         // defining the function
    console.log('Hello');
}

/**
 * Create HelloUser function in a way that userName ALWAYS print in the titlecase
 */
function helloUser(userName) {      // username is the local-variable to this function (scope of username-variable is helloUser function)
    userName = m.toTitleCase(userName);
    console.log(`Hello ${userName}`);
}

/**
 * Create a function to add 2-numbers
 */
function add2Nums(num1 , num2) {
    return num1+num2;
}