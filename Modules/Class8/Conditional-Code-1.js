/**
 * if it's raining
 *      action: take umbrella
 * 
 * 
 * 
 * if today is myBirthDate
 *      action: I will cut the cake
 * otherwise
 *      action: I will wish the one who is cutting the cake
 * 
 * 
 * Related Conditions:
 * if today is Monday and I have meeting at work
 *      action: I will dress up in business suit
 * if today is Wednesday or Friday
 *      action: I will work from home
 * if today is tuesday or thursday
 *      action: I will dress in business casual
 * if today is Saturday or Sunday
 *      action: I will Enjoy!
 */
/**
 * Conditional Code Block (Conditional Loop):
 *      1. if-else block
 *      2. switch block
 * 
 * When we have different actions (code to execute) depending upon condition(s)
 * 
 */
/**
 * Syntax of if-block:
 * 
 * if(condition(s)) {
 *      if-block
 *      code insode the if-block block will execute only when condition(s) result into true.
 * 
 *      Only when the condition(s) result into true, Js enters in the if-block and execute all the code
 *      Otherwise, move ahead in the file.
 * }
 * 
 */
/**
 * Create a variable (named: myString) and store any string value in it.
 * when the value in myString variable has length greater than 15; Print 'Value in myString-variable has length greater than 15'
 */
console.log('\nif-block example');
let myString = 'Hello World yes1';
// condition: length > 15
// action: Print 'Value in myString-variable has length greater than 15'
if (myString.length > 15) {
    console.log('Value in myString-variable has length greater than 15');
}
console.log("Last after the if-block");

/**
 * Create a variable (named: myString1) and store any string value in it.
 * when the value in myString1-variable has length greater than 15; Print 'Value in myString1-variable has length greater than 15'
 * otherwise, print the value of myString1-variable.
 */
// condition: length > 15
//      action: Print 'Value in myString1-variable has length greater than 15'
// otherwise
//      action: Print the value of myString1-variable.
/**
 * Syntax of if-else-block:
 * 
 * if(condition(s)) {
 *      if-block
 *      code insode the if-block block will execute only when condition(s) result into true.
 * 
 *      Only when the condition(s) result into true, Js enters in the if-block and execute all the code.
 *      And, ignore else-block
 * } else {         // -> we NEVER put any condition with else block
 *      else-block
 *      code inside the else-block will execute AUTOMATICALLY when condition(s) result into false
 * 
 *      Only when the condition(s) result into false, Js AUTOMATICALLY enters in the else-block (ignoring if-block) and execute all the code
 * }
 */
console.log('\nif-else-block example');
let myString1 = 'Queen and King went out for shopping';

if (myString1.length > 15) {
    console.log('Value in myString1-variable has length greater than 15');
} else {
    console.log(`Value of myString1-variable is ${myString1}`);
}


/**
 * Syntax of if-elseif-else-block:
 * 
 * if(condition(s)) {
 *      if-block
 *      code inside the if-block block will execute only when condition(s) result into true.
 * 
 *      Only when the condition(s) result into true, Js enters in the if-block (ignoring ALL below blocks) and execute all the code.
 * } else if (condition(s)) {
 *      else-if block
 *      code inside the else-if-block block will execute only when condition(s) result into true.
 * 
 *      Only when the condition(s) result into true, Js enters in the else-if-block (ignoring ALL below blocks) and execute all the code.
 * } else if (condition(s)) {
 *      else-if block
 *      code inside the else-if-block block will execute only when condition(s) result into true.
 * 
 *      Only when the condition(s) result into true, Js enters in the else-if-block (ignoring ALL below blocks) and execute all the code.
 * } else if (condition(s)) {
 *      else-if block
 *      code inside the else-if-block block will execute only when condition(s) result into true.
 * 
 *      Only when the condition(s) result into true, Js enters in the else-if-block (ignoring ALL below blocks) and execute all the code.
 * } else {
 *      else-block
 *      code inside the else-block will execute AUTOMATICALLY when condition(s) result into false
 * 
 *      Only when the condition(s) result into false, Js AUTOMATICALLY enters in the else-block (ignoring ALL above-blocks) and execute all the code
 * }
 */
console.log('\nif-elseif-else-block example');

/**
 * if today is Monday and I have meeting at work
 *      action: I will dress up in business suit
 * if today is Wednesday or Friday
 *      action: I will work from home
 * if today is tuesday or thursday
 *      action: I will dress in business casual
 * if today is Saturday or Sunday
 *      action: I will Enjoy!
 *
 */

let dayName = 'mOnDAy';
let anyMeeting = true ;

if (dayName.toLowerCase().localeCompare('monday') === 0 && anyMeeting) {
    console.log('I will dress up in business suit');
} else if (dayName.toLowerCase().localeCompare('wednesday') === 0 || dayName.toLowerCase().localeCompare('wriday') === 0) {
    console.log('I will work from home');
} else if (dayName.toLowerCase().localeCompare('tuesday') === 0 || dayName.toLowerCase().localeCompare('thursday') === 0) {
    console.log('I will dress in business casual');
} else {
    console.log('I will Enjoy!');
}

/**
 * Question:
 * if userArray has 'Hello' exactly present only ONCE
 *      print the length of array
 *      And, the index at which Hello is present
 * otherwise
 *      Print index of First-Hello and last-Hello in the Arrays
 */

/*
    userArray has 'Hello' exactly present only ONCE
        userArray.indexOf('Hello')      -> X
        userArray.lastIndexOf('Hello')  -> X

        userArray.indexOf('Hello') === userArray.lastIndexOf('Hello')
        AND, userArray.indexOf('Hello') !== -1
        AND, userArray.lastIndexOf('Hello') !== -1


*/

console.log('\nQuestion-2 Solution');
let userArray = ['you', 'live', 'Hello', 'only', 'once', 'Hello'];

if (userArray.indexOf('Hello') === userArray.lastIndexOf('Hello') && userArray.indexOf('Hello') !== -1 && userArray.lastIndexOf('Hello') !== -1) {
    console.log(`Length of userArray -> ${userArray.length}`);
    console.log(`Index at which "Hello" is present in userArray -> ${userArray.indexOf('Hello')}`);
} else {
    console.log(`Index at which first "Hello" is present in userArray -> ${userArray.indexOf('Hello')}`);
    console.log(`Index at which last "Hello" is present in userArray -> ${userArray.lastIndexOf('Hello')}`);
}

/**
 * Question-3:
 * if userArray1 has 'Hello' exactly present only ONCE
 *      print the length of array
 *      And, the index at which Hello is present
 * if Hello is present more than once
 *      Print index of First-Hello and last-Hello in the userArray1
 * if Hello is not present at all
 *      Print Hello is not present in the Array
 */
console.log('\nQuestion-3 Solution');
let userArray1 = ['you', 'live', 'Hello', 'only', 'once', 'Hello'];
if (userArray1.indexOf('Hello') === userArray1.lastIndexOf('Hello') && userArray1.indexOf('Hello') !== -1 && userArray1.lastIndexOf('Hello') !== -1) {
    console.log(`Length of userArray1 -> ${userArray1.length}`);
    console.log(`Index at which "Hello" is present in userArray1 -> ${userArray1.indexOf('Hello')}`);
} else if (userArray1.indexOf('Hello') !== userArray1.lastIndexOf('Hello')) {
    console.log(`Index at which first "Hello" is present in userArray1 -> ${userArray1.indexOf('Hello')}`);
    console.log(`Index at which last "Hello" is present in userArray1 -> ${userArray1.lastIndexOf('Hello')}`);
} else {
    console.log(`Hello is not present in the userArray1`);
    console.log(`userArray1 -> ${userArray1}`);
}


/**
 * switch block
 * 
 * 1. All conditions are related to ONLY one variable.
 * 2. All conditions are checking/comparing ONLY equals or equalsIgnoreCase
 * 3. For every block, you have either ONE condition
 *      OR multiple conditions combined using OR-operator
 * 
 * Syntax:
 * 
 * switch (variableName) {
 *      case val1:
 *          case block
 *          code in this block will execute (ignoring all other case-blocks) if variablaName value equals to val1
 *          break;          <-- defines the last line of this case-block
 *      case val2:
 *          case block
 *          code in this block will execute (ignoring all other case-blocks) if variablaName value equals to val2
 *          break;          <-- defines the last line of this case-block
 *      case val3:
 *          case block
 *          code in this block will execute (ignoring all other case-blocks) if variablaName value equals to val3
 *          break;          <-- defines the last line of this case-block
 *      case val4:
 *          case block
 *          code in this block will execute (ignoring all other case-blocks) if variablaName value equals to val4
 *          break;          <-- defines the last line of this case-block
 *      default:
 *          default block
 *          code in this block will execute (ignoring all other case-blocks) if variableName is NOT equals to any case-value
 * }
 * 
 * 
 */

/**
 * Print the seasonName for the given month
 * month = Jun, Jul, Aug    season -> Summer
 * month = Sep, Oct, Nov    season -> Fall
 * month = Dec, Jan, Feb    season -> Winter
 * month = Mar, Apr, May    season -> Spring
 */
console.log('\nPrint the seasonName for the given month');
let monthName = 'Oct';

if (monthName.localeCompare('Jun') === 0 || monthName.localeCompare('Jul') === 0 || monthName.localeCompare('Aug') === 0) {
    console.log(`For month = ${monthName} ; Season is Summer`);
} else if (monthName.localeCompare('Sep') === 0 || monthName.localeCompare('Oct') === 0 || monthName.localeCompare('Nov') === 0) {
    console.log(`For month = ${monthName} ; Season is Fall`);
} else if (monthName.localeCompare('Dec') === 0 || monthName.localeCompare('Jan') === 0 || monthName.localeCompare('Feb') === 0) {
    console.log(`For month = ${monthName} ; Season is Winter`);
} else if (monthName.localeCompare('Mar') === 0 || monthName.localeCompare('Apr') === 0 || monthName.localeCompare('May') === 0) {
    console.log(`For month = ${monthName} ; Season is Spring`);
}

console.log('\nCode using switch-block');
switch (monthName) {
    case 'Jun':
    case 'Jul':
    case 'Aug':
        console.log(`For month = ${monthName} ; Season is Summer`);
        break;
    case 'Sep':
    case 'Oct':
    case 'Nov':
        console.log(`For month = ${monthName} ; Season is Fall`);
        break;
    case 'Dec':
    case 'Jan':
    case 'Feb':
        console.log(`For month = ${monthName} ; Season is Winter`);
        break;
    case 'Mar':
    case 'Apr':
    case 'May':
        console.log(`For month = ${monthName} ; Season is Spring`);
        break;
}

