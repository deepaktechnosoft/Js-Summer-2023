/**
 * Operators:
 * 
 * 5. Ternary (?:)
 *      used in a situation where we have TWO-values, and one of values can be assigned to a variable depending upon condition(s)
 * 
 * Syntax:
 * 
 * varName = condition(s) ? valueIfTrue : valueIfFalse
 */

/**
 * 
 * Bank will provide loan to client with credit-score is 650 or more AND annual-pay is more than 200000
 * Interest rate will be 1.2 otherwise 3.4
 * 
 * 
 * interestRate = X
 * creditScore = Y
 * annualSalary = Z
 * 
 */
let creditScore = 700;
let annualSalary = 1000000;
let interestRate = creditScore >= 650 && annualSalary > 200000 ? 1.2 : 3.4;
console.log(`\ninterestRate -> ${interestRate}`);

/**
 * Bank is will provide cheaper mortgage rate to clients with:
 *      minimum credit score of 750 and annual salary greater than 500000
 *      OR, minimum credit score 600 for first time home buyer
 * Mortgage rate will be 1.5 otherwise 6.5
 */
let creditScore1 = 700
let annualSalary1 = 350000
let isFirstTimeBuyer = false
let mortgageRate = (creditScore1 >= 750 && annualSalary1 > 500000) || (creditScore1 >= 600 && isFirstTimeBuyer === true) ? 1.5 : 6.5;
console.log(`\n\nmortgage rate is ${mortgageRate}`);


/**
 * 
 *      isFirstTimeBuyer === true           <--->       isFirstTimeBuyer
 *      
 *      isFirstTimeBuyer (true)                         isFirstTimeBuyer (true)
 *      isFirstTimeBuyer === true                       true
 *      true === true
 *      true
 * 
 *      isFirstTimeBuyer (false)                        isFirstTimeBuyer (false)
 *      isFirstTimeBuyer === true                       false
 *      false === true
 *      false
 * 
 * 
 * 
 * 
 * 
 *      isFirstTimeBuyer === false                      !isFirstTimeBuyer
 * 
 * 
 */




