/**
 * Variables: an entity to store the data temporarily.
 *              gets created during the execution of program and gets destroyed at the end of program execution.
 */

/**
 * numeric
 *      whole (phone number, age, year, ssn, numberOfCars, ...)
 *      decimal (grades, weight, temperature, bankBalance, ...)
 * 
 * Alpha-numeric
 *      single-character (gender)
 *      multi-characters (name, address, blood-group, favPhone, ...)
 * 
 * yes/no (true/false)
 *      are you above 18?
 *      are you married?
 *      have you seen the documentary?
 *      
 */
/**
 * Datatypes:
 *      defines the type/category of data in programming.
 *      Types:
 *      1. numeric data (always going to be in whole number) - int/long
 *      2. numeric data (may or may not be with decimal point) - float/double
 *      ---> JS considers any numeric data as number-datatype <---
 *      
 *      3. single-character - char (or character)
 *          char-value must be enclosed within single-quotes ('A')
 *      4. multiple-characters - String
 *          String-value must be enclosed with in double-quotes ("Apple" , "A")
 *      ---> JS considers any characters value as String datatype <---
 *      ---> JS considers char and String values as String-values <---
 *      ---> In JS, we can use single-quote or double-quote to write String value
 *      ---> 'Apple' or "Apple" or 'A' or "A" or 'A B C D' or "A B C D"
 * 
 *      5. yes/no (true/false)
 *      ---> JS treats true/false as boolean datatypes (like all other programming languages).
 *      ---> true/false are the keywords of programming language
 * 
 *      JS specific datatypes:
 *      6. undefined -> when data is not known
 * 
 *      7. null -> defines nothing/empty/zero/false
 * 
 * 
 *      Datatypes in JS:
 *      1. number
 *      2. String
 *      3. boolean
 *      4. undefined
 *      5. null
 * 
 */

/**
 * To create a variables in JS, we use var-keyword, let-keyword or const-keyword
 * 
 * Syntax to create a variable in JS:
 * 
 * let varName;     <--- we are creating a variable (named: varName); it's value right now is undefined.
 * 
 * let varName2 = value2;   <--- we are creating a variable (named: varName2); and assigning/storing a value(value2) in it
 * 
 * 
 * varName = value1;       <--- assigning/reassigning the value in varName-variable
 * 
 * varName2 = value22;       <--- assigning/reassigning the value in varName2-variable (therefore, varName2 will now have value as value22)
 * 
 * 
 * varName2 = value44;       <--- assigning/reassigning the value in varName2-variable (therefore, varName2 will now have value as value44)
 * 
 * 
 *      =   programming languages solves the equation or code written on in right-side of equal-to sign
 *          and the result goes into the variable mentioned on the left-side of equal-to sign
 * 
 * let      ->  does NOT allow to create multiple variables with same-name within a scope.
 * var      ->  does allow to create multiple variables with same-name within a scope.
 * const    ->  to create a constant-variable (we also call it final-variable)
 *              once the value is assigned, you cannot reassign the value in it.
 * 
 */
let myAge = 10;     // created a variable(myAge) and stored value(10) in it.
myAge = 15;         // reassining value in variable(myAge); value in myAge is 15

// what is the value in myAge? - 15


const myName = 'Deepak Sharma';

/**
 * Operator which helps us to figure out which datatype is stored in the variable
 *      OR
 * Operator which helps us to figure out what type of value is stored in the variable
 * 
 * Operator: typeof
 */

let var1;

let var2 = true;

console.log(typeof myAge);      // number
console.log(typeof myName);     // String
console.log(typeof var1);       // undefined
console.log(typeof var2);       // boolean

// Print the value stored in myAge-variable
/**
 * If you want to print the value stored in a variable;
 *      then put the variable in console.log WITHOUT the quotes
 */

console.log(myAge);         // printing the value stored in myAge-variable
console.log('myAge');       // printing the string 'myAge' in the terminal


myAge = 'Happy';
console.log(myAge);         // Happy
console.log(typeof myAge);  // String

myAge = 22;

console.log(`\nAge is ${myAge}`);      // Age is 22

console.log(`\nMy name is "${myName}" and I am ${myAge} years old`);              // My name is "NAME" and I am AGE years old

/**
 * Good practice to provide names:
 * 1. variables:
 *      -> name should relate to the stored value.
 *      -> cannot use js-keywords (let, var, const, typeof, console, log etc)
 *      -> cannot have spaces
 *      -> starts with lowercase (when we create const-variable, we give name in UPPERCASE)
 *      -> never start with a digit or special character
 *      -> if name has more than one word, use camelCaseFormat
 *          eg:
 *              my age -> myAge
 *              my dog age -> myDogAge
 *              account balance -> accountBalance
 * 
 * 2. Files/Folders:
 *      -> name should relate to the content in File/Folder
 *      -> cannot use js-keywords (let, var, const, typeof, console, log etc)
 *      -> cannot have spaces
 *      -> starts with Uppercase
 *      -> never start with a digit or special character
 *      -> if name has more than one word, use CamelCaseFormat
 *          eg:
 *              class1 content folder -> Class1ContentFolder or Class1_ContentFolder
 * 
 * 
 * 
 * 
 */