/**
 * Array:
 *      which can store one or more valiues at any given time.
 *      technically, is an object
 *      represent by []
 * 
 *      -> values in an array is getting stored by the concept on index
 *          first-value gets stored at index-0
 *          second-value gets stored at index-1
 *          third-value gets stored at index-2
 *          fourth-value gets stored at index-3
 *          and so on ...
 */
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
 * 
 */

let sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
console.log(`\nsports -> ${sports}`);

let digits = [10, 45, 23, 78, 1, 43, 19];
console.log(`\ndigits -> ${digits}`);

/**
 * To add/remove multiple values in/from the array
 * function: splice()
 * input-1: index from where to add/remove value
 * input-2: how many values to remove before adding any new-values
 * input-3: new-values to add in the array
 * return: an array with removed values
 * 
 * NOTE: the function changes the original array
 * 
 */
console.log('\n\nfunction - splice()');
let sports_splice1 = sports.splice(2, 1, 'A', 'B', 'C', 'D');
console.log(`\nsports_splice1 -> ${sports_splice1}`);
/*
    starting from index-2               ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
    remove 1-value
    then add 'A', 'B', 'C', 'D'


    ['FootBall', 'SoCCer', 'A', 'B', 'C', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']

*/
console.log(`sports -> ${sports}`);                                 // ['FootBall', 'SoCCer', 'A', 'B', 'C', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']


let sports_splice2 = sports.splice(3, 2);                           // <--- using splice to remove values from the array
console.log(`\nsports_splice2 -> ${sports_splice2}`);
/*
    starting from index-3                   ['FootBall', 'SoCCer', 'A', 'B', 'C', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
    remove 2-values                         ['FootBall', 'SoCCer', 'A', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
*/
console.log(`sports -> ${sports}`);

let sports_splice3 = sports.splice(2, 0 , 'RunnING', 'ChESS');      // <--- using splice to adding values in the array
console.log(`\nsports_splice3 -> ${sports_splice3}`);
/*
    starting from index-2                   ['FootBall', 'SoCCer', 'A', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
    remove 0-value
    add 'RunnING', 'ChESS'                  ['FootBall', 'SoCCer', 'RunnING', 'ChESS', 'A', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']     
*/
console.log(`sports -> ${sports}`);


/**
 * Using splice(), replace index-2-value with 'Long Jump'
 */
console.log('\nUsing splice(), replace index-2-value with "Long Jump"');
sports.splice(2, 1,'Long Jump');
/*
    starting from index-2           ['FootBall', 'SoCCer', 'RunnING', 'ChESS', 'A', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']     
    remove 1-value                   
    add 'Long Jump'                 ['FootBall', 'SoCCer', 'Long Jump', 'ChESS', 'A', 'D', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']     
*/
console.log(`sports -> ${sports}`);

/**
 * To concat/join multiple array together to form a bigger array
 *      OR
 * To add multiple values at the start or/and end of the array
 * function: concat()
 * input: values to add/join
 * return: a new-aray after adding values
 * 
 * NOTE: the function does NOT change the original array
 */

console.log('\nfunction - concat()');

sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
console.log(`\nsports -> ${sports}`);

digits = [10, 45, 23, 78, 1, 43, 19];
console.log(`digits -> ${digits}`);

let wordsArray = ['you', 'live', 'only', 'once'];
console.log(`wordsArray -> ${wordsArray}`);

let sportsAfterConcat = sports.concat('Apple', 'Banana', 'Cheery', 'Mango', 'Carrot', 'Tomato');
/**
 * 1. creates a new empty array
 * 2. get all the values from sports-array in new-array
 * 3. add all given values at the end in new-array
 * 4. returns the new-array
 */
console.log(`\nsports -> ${sports}`);
console.log(`sportsAfterConcat -> ${sportsAfterConcat}`);


let sportsAfterConcat2 = wordsArray.concat(sports);
/**
 * 1. creates a new empty array
 * 2. get all the values from wordsArray in new-array
 * 3. add all values from sports-Array at the end in new-array
 * 4. returns the new-array
 */
console.log(`\nsports -> ${sports}`);
console.log(`wordsArray -> ${wordsArray}`);
console.log(`sportsAfterConcat2 -> ${sportsAfterConcat2}`);


let fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
let states = ['NY', 'Nj', 'PA', 'ca', 'wi', 'Tx', 'aL'];

let sportsAfterConcat3 = fruits.concat(sports, wordsArray, "XXXX", 'GREAT', states);
/**
 * 1. creates a new empty array
 * 2. get all the values from fruits-array in new-array
 * 3. add all values from sports-Array at the end in new-array
 * 4. add all values from wordsArray at the end in new-array
 * 5. add "XXXX" at the end of new-array
 * 6. add "GREAT" at the end of new-array
 * 7. add all values from starts-Array at the end in new-array
 * 8. returns the new-array
 */
console.log(`\nsports -> ${sports}`);
console.log(`wordsArray -> ${wordsArray}`);
console.log(`fruits -> ${fruits}`);
console.log(`states -> ${states}`);
console.log(`sportsAfterConcat3 -> ${sportsAfterConcat3}`);


/**
 * Using concat(), add 'Ping Pong', 'Card Game' in the sports-array
 */
console.log("\nUsing concat(), add 'Ping Pong', 'Card Game' in the sports-array");
sports = sports.concat('Ping Pong', 'Card Game');
/**
 * 1. creates a new empty array
 * 2. get all the values from sports-array in new-array
 * 3. add 'Ping Pong', 'Card Game' at the end in new-array
 * 4. returns the new-array
 */
console.log(`sports -> ${sports}`);

/**
 * To find if a given value is EXACTLY present in the array
 * function: includes()
 * input: value-to-check
 * return: boolean
 * 
 * 
 * if the given value is exactly present at any index in the array
 *      function returns true
 * otherwise
 *      function returns false
 * 
 */
console.log('\nfunction - includes()');
console.log(`fruits -> ${fruits}`);                         // fruits -> [apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY]

let isPresent_Apple = fruits.includes('Apple');
console.log(`is 'Apple' present in the fruits-array -> ${isPresent_Apple}`);                    // false

let isPresent_BAnana_Cherry = fruits.includes('BAnana, Cherry');
console.log(`is 'BAnana, Cherry' present in the fruits-array -> ${isPresent_BAnana_Cherry}`);   // false

let isPresent_BAnana = fruits.includes('BAnana');
console.log(`is 'BAnana' present in the fruits-array -> ${isPresent_BAnana}`);                  // true

let isPresent_app = fruits.includes('app');
console.log(`is 'app' present in the fruits-array -> ${isPresent_app}`);                        // false


/**
 * To find the index of FIRST OCCURRENCE of the given value in the array
 * function: indexOf()
 * input: value
 * return: number
 * 
 * if the given value is EXACTLY present at any index in the array
 *      function returns the index of FIRST OCCURRENCE
 * otherwise
 *      function returns -1
 * 
 */
fruits = fruits.concat(fruits, states, fruits, sports, states, fruits, sports);
console.log('\nfunction - indexOf()');
console.log(`fruits -> ${fruits}`);
/*
    [apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, NY, Nj,
     PA, ca, wi, Tx, aL, apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, FootBall, SoCCer, GOLf, HocKEy, MaraTHon, 
    RuGBy, BasketBaLl, Ping Pong, Card Game, NY, Nj, PA, ca, wi, Tx, aL, apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY,
     FootBall, SoCCer, GOLf, HocKEy, MaraTHon, RuGBy, BasketBaLl, Ping Pong, Card Game]
*/
let indexOf_nana = fruits.indexOf('nana');
console.log(`Index of 'nana' -> ${indexOf_nana}`);

let indexOf_Tx = fruits.indexOf('Tx');
console.log(`Index of 'Tx' -> ${indexOf_Tx}`);

let indexOf_Apple = fruits.indexOf('Apple');
console.log(`Index of 'Apple' -> ${indexOf_Apple}`);

let indexOf_apple = fruits.indexOf('apple');
console.log(`Index of 'apple' -> ${indexOf_apple}`);

/**
 * To find the index of LAST OCCURRENCE of the given value in the array
 * function: lastIndexOf()
 * input: value
 * return: number
 * 
 * if the given value is EXACTLY present at any index in the array
 *      function returns the index of LAST OCCURRENCE
 * otherwise
 *      function returns -1
 * 
 */
console.log('\nfunction - lastIndexOf()');
console.log(`fruits -> ${fruits}`);
/*
    [apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, NY, Nj,
     PA, ca, wi, Tx, aL, apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY, FootBall, SoCCer, GOLf, HocKEy, MaraTHon, 
    RuGBy, BasketBaLl, Ping Pong, Card Game, NY, Nj, PA, ca, wi, Tx, aL, apple, BAnana, Cherry, GraPEs, Celery, BluebeRRY,
     FootBall, SoCCer, GOLf, HocKEy, MaraTHon, RuGBy, BasketBaLl, Ping Pong, Card Game]
*/

let lastIndexOf_nana = fruits.lastIndexOf('nana');
console.log(`Last index of 'nana' -> ${lastIndexOf_nana}`);

let lastIndexOf_Tx = fruits.lastIndexOf('Tx');
console.log(`Last index of 'Tx' -> ${lastIndexOf_Tx}`);

let lastIndexOf_Apple = fruits.lastIndexOf('Apple');
console.log(`Last index of 'Apple' -> ${lastIndexOf_Apple}`);

let lastIndexOf_apple = fruits.lastIndexOf('apple');
console.log(`Last index of 'apple' -> ${lastIndexOf_apple}`);

/**
 * To reverse an array
 * function: reverse()
 * 
 * NOTE: the function changes the original array
 * 
 */
console.log('\nfunction - reverse()');
console.log(`states before reverse() -> ${states}`);

states.reverse();

console.log(`states after reverse() -> ${states}`);

/**
 * To replace a value from a specific index
 * function: fill()
 * input-1: new-Value
 * input-2: startindex -> start index from which we want to replace the values
 * input-3: endIndex -> upto which index we want to replace the values (endIndex is excluded)
 * 
 * 
 * if input-3 is not provided
 *      starting from start-index, all values get replaced with new-value
 * 
 * if input-2 and input-3 ar enot provided:
 *      all values in the array get replaced with new-value
 * 
 * NOTE: the function changes the original array
 * 
 */

console.log('\nfunction - fill()');
console.log(`sports -> ${sports}`);         // [FootBall, SoCCer, GOLf, HocKEy, MaraTHon, RuGBy, BasketBaLl, Ping Pong, Card Game]

sports.fill('SwimmING', 3, 6);              // replace values at index-3,4,5 with 'SwimmING'
console.log(`sports -> ${sports}`);         // [FootBall, SoCCer, GOLf, SwimmING, SwimmING, SwimmING, BasketBaLl, Ping Pong, Card Game]


sports.fill('Kick Boxing', 5);              // replace values from index-5 with 'Kick Boxing'
console.log(`sports -> ${sports}`);         // [FootBall, SoCCer, GOLf, SwimmING, SwimmING, Kick Boxing, Kick Boxing, Kick Boxing, Kick Boxing]


sports.fill('Boxing');                      // replace all values in the array with 'Boxing'
console.log(`sports -> ${sports}`);         // [Boxing, Boxing, Boxing, Boxing, Boxing, Boxing, Boxing, Boxing, Boxing]


console.log('\n\nUsing fill() : replace index-2 with "CO"');
console.log(states);                        // ['aL', 'Tx', 'wi', 'ca', 'PA', 'Nj', 'NY']
states.fill('CO', 2, 3);                    // replace index-2 with "CO"
console.log(states);                        // ['aL', 'Tx', 'CO', 'ca', 'PA', 'Nj', 'NY']