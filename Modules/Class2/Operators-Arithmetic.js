/**
 * Operators:
 * 
 * 2. Arithmetic (+, -, *, /, %, ++, --)
 * 
 * 
 *      %   ->  Modulus
 *      ++  ->  Increment
 *      --  ->  Decrement
 * 
 */
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// let num4 = 40;
let num1=10, num=20, num3=30, num4=40;

/**
 * Find the result of 7/3 WITHOUT going into decimal-point
 * answer: 2
 * reminder: 1
 * 
 * 7/3 = 2 (reminder = 1)
 * 10/5 = 2 (reminder = 0)
 * 7/9 = 0 (reminder = 7)
 * 
 * 
 */
/**
 * Modulus (%)
 *      -> find the reminder after a division (withOUT going into decimal point)
 *      -> try dividing the number without going into decimal point
 *          and the remainder is the output/result of Modulus operator
 */

/**
 * 7/3 = 2 (reminder = 1)
 * 7%3 = 1
 * 
 * 10%5 = 0
 * 
 * 7%9 = 7
 */
// Find if 837983 is divisible by 3
console.log('\nModulus operator');
console.log(`\nResult of "837983%3" -> ${837983%3}`);

/**
 * Increment (++)
 *      increases the value in the variable by 1
 * 
 */
console.log('\nIncrement operator');
let i1 = 10;
console.log(`i1 -> ${i1}`);         // 10
i1++;
console.log(`i1 -> ${i1}`);         // 11
++i1;
console.log(`i1 -> ${i1}`);         // 12
++i1;
console.log(`i1 -> ${i1}`);         // 13
/**
 * Types of Increment operator
 * 1. Post-increment
 *      when we put ++operator AFTER the variable
 *      when post-increment is getting used with another code or operator in the same line,
 *      Execute everything with the current value (before increment),
 *          later (BEHIND THE SCENES) perform the post-increment operstor (increment the value)
 * 
 * 2. Pre-increment
 *      when we put ++operator BEFORE the variable
 *      when pre-increment is getting used with another code or operator in the same line,
 *      Execute the pre-increment operator FIRST (increment the value), later
 *          perform the other code mentioned in the line (using the incremented value).
 * 
 */
console.log(`i1 -> ${i1++}`);       // console.log and post-increment
/*
    console.log(`i1 -> ${i1}`);     // i1 -> 13 (print)
    post-increment on i1            // i1 = 14
*/

console.log(`i1 -> ${++i1}`);       // pre-increment and console.log
/*
    pre-increment on i1 (++i1)      // i1 = 15
    console.log(`i1 -> ${i1}`);     // i1 -> 15 (print)

*/

let var1 = 10;
            // var1=10
let var2 = 20;
            // var1=10, var2=20
let var3 = var1++;
            /*
                assignment          let var3 = var1; -> let var3 = 10; -> var3=10
                post-increment      var1++ -> var1=11
            */
            // var1=11, var2=20, var3=10

// what is the value in var1, var2, var3
console.log(`var1 -> ${var1}`);     // 10 10    11
console.log(`var2 -> ${var2}`);     // 20 20    20
console.log(`var3 -> ${var3}`);     // 11 21    10

/**
 * Decrement (--)
 *      decreases the value in the variable by 1
 * 
 */
/**
 * Types of Decrement operator
 * 1. Post-decrement
 *      when we put --operator AFTER the variable
 *      when post-decrement is getting used with another code or operator in the same line,
 *      Execute everything with the current value (before decrement),
 *          later (BEHIND THE SCENES) perform the post-decrement operator (decrement the value)
 * 
 * 2. Pre-decrement
 *      when we put --operator BEFORE the variable
 *      when pre-decrement is getting used with another code or operator in the same line,
 *      Execute the pre-decrement operator FIRST (decrement the value), later
 *          perform the other code mentioned in the line (using the decremented value).
 * 
 */

let d1 = 10, d2 = 20;
let d3 = ++d1 + d2--;
/**
    assignment , pre-increment(d1) , addition , post-decrement(d2)

    pre-increment(d1), (d1=11)
    
    addition , 
        d1 + d2 (11 + 20 -> 31)
    
    assignment 
        let d3 = 31

    , post-decrement(d2)    (d2=19)

 */

console.log(`d1 = ${d1}`);      // 11
console.log(`d2 = ${d2}`);      // 19
console.log(`d3 = ${d3}`);      // 31
