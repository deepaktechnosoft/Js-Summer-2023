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
 *      Array-Concept-3.js
 *          splice()
 *          concat()
 *          includes()
 *          indexOf()
 *          lastIndexOf()
 *          reverse()
 *          fill()
 *      Array-Concept-4.js
 *          map()
 *          filter()
 *          find()
 * 
 */

/**
 * When we need to perform/apply given function of EVERY value in the array
 * function: map()
 * 
 * map() applies/perform the function on every value in the array
 * and return the result into a NEW-array
 * 
 * Note: map() does NOT change the original array
 * 
 */
console.log('\n\nUsing map(): Convert all array values into Uppercase, and store final result into new-array\n');
const planets = ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
let planets_U = planets.map(pName => pName.toUpperCase());


console.log(planets);               // ['earTh', 'meRCUrY', 'VeNUs', 'Mars', 'JUPiTer']
console.log(planets_U);             // [ 'EARTH', 'MERCURY', 'VENUS', 'MARS', 'JUPITER' ]

function convertUpperCase(input) {
    return input.toUpperCase();
}

/**
 * When we need to filter values from array into a new-Array based on condition(s)
 * function: filter()
 * 
 * filter() checks all the values of array for the given condition(s)
 *      whichever values statify the condition goes into a NEW-array
 *      at the end, returns the NEW array
 * Note: filter() does NOT change the original array
 * 
 */

console.log('\n\nUsing filter(): find the words from given array which are having length>5 and contains i or I\n');
const userArray = ["Go", "to", "NBCNews.com", "for", "breaking news,", "videos,", "and", "the", "latest", "top", "stories", "in", "world news,", "business,", "politics,", "health", "and", "pop", "culture"];

let filterResult = userArray.filter(word => word.length>5 && word.toLowerCase().includes('i'));

console.log(userArray);
console.log(filterResult);


/**
 * When we need to find the first-value from the array which statisfies the given condition
 * function: find()
 * 
 * if any array-value is found which statisfies the condition(s)
 *      function return that array-value
 * otherwise
 *      function returns undefined
 * 
 * NOTE: find() returns the FIRST array-value which satisfies the specified condition(s)
 * 
 */


/**
 * Find the first array value which is divisible by 7
 */
console.log('\n\nUsing find(): Find the first array value which is divisible by 7\n');
const numbers = [90, 56, 87, 32, 12, 68];
let ans = numbers.find(num => num%7===0);
console.log(numbers);
console.log(ans);


/**
 * Based on given info (accountNumber, amount, accountHolderName) of multiple bankAccounts.
 * 
 * Find the account holder's name for accountNumber: 1212
 *      
 */
console.log("\n\nFind the account holder's name for accountNumber: 1212\n");
const bankAccountDetail = [
    {
        accNum: 1111,
        amount: 100000,
        holderName: 'John Doe'
    },
    {
        accNum: 2222,
        amount: 20047484,
        holderName: 'Queen'
    },
    {
        accNum: 1212,
        amount: 84736387,
        holderName: 'King'
    },
    {
        accNum: 9890,
        amount: 36526732,
        holderName: 'Mark'
    },
    {
        accNum: 6745,
        amount: 100000,
        holderName: 'John Doe'
    }
]

/*
    using find()
        give the the accountObject where accountNumber is 1212
*/
const accountWithNum1212 = bankAccountDetail.find(account => account.accNum === 1212);
/*
    accountWithNum1212 = {
        accNum: 1212,
        amount: 84736387,
        holderName: 'King'
    }

    accountWithNum1212.holderName
*/
console.log(accountWithNum1212);
console.log(accountWithNum1212.holderName);
