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
 */

/**
 * Create a function which can generate abbreviation for any string-value
 * 
 * good Morning -> GM
 * happy NEW Year -> HNY
 */
/**
 *  1. what is the purpose of the function?                         -->         generateAbbreviation / createAbbreviation
 *      This helps with the function-name
 * 
 *  2. Do I need any input from user?                               -->         yes
 *      If yes,
 *          a) how many input we need from user?                    -->         1
 * 
 *  3. Should the function return any value/data back to user?
 *      If yes, 
 *          make sure to write return-statement as the LAST line in the function    --> Return it
 *      otherwise,
 *          NO return statement in the function
 */

function generateAbbreviation(userInputStr) {
    let result = '';

    const userInputStrArray = userInputStr.split(' ');

    // for (let X=0 ; X <= userInputStrArray.length-1 ; X++) {
    //     let charAt0 = userInputStrArray[X].charAt(0);
    //     let charAt0_U = charAt0.toUpperCase();
    //     result = result + charAt0_U;
    // }

    for (const word of userInputStrArray) {
        let charAt0 = word.charAt(0);
        let charAt0_U = charAt0.toUpperCase();
        result = result + charAt0_U;
    }

    return result;
}
/**
 * result = '';
 * 
 * 1. split string  ['happy', 'NEW', 'Year']
 * 2. index-0-value
 *      get index-0 from index-0-value(string) -> h
 *      h -> convert into Uppercase -> H
 *      H -> result = result + H -> result = '' + H = H
 *      
 *    index-1-value
 *      get index-0 from index-1-value(string) -> N
 *      N -> convert into Uppercase -> N
 *      N -> result = result + N -> result = H + N = HN
 * 
 * 
 * 
 * 
 *    index-X-value
 *      get index-0 from index-X-value(string) -> A
 *      A -> convert into Uppercase -> A
 *      A -> result = result + A
 * 
 * 
 * 'word1 word2 word3 word4 word5'
 * split -> ['word1', 'word2' , 'word3' , 'word4' , 'word5']
 * 
 * 
 */


let abbr1 = generateAbbreviation("happy NEW year");
console.log(abbr1);


let abbr2 = generateAbbreviation("good Morning");
console.log(abbr2);


let abbr3 = generateAbbreviation("have a great Day aHEad");
console.log(abbr3);


let abbr4 = generateAbbreviation("you are a rockstar keep rocking and slaying");
console.log(abbr4);


