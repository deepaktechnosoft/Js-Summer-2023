/**
 * Operators:
 * 
 * 3. Comparison (>, >=, <, <=, ===, !==)
 * 
 * >        -->     is greater than
 * >=       -->     is greater than or equals to
 * <        -->     is less than
 * <=       -->     is less than or equals to
 * ===      -->     is equals to
 * !==      -->     is NOT equals to
 * 
 * 
 * NOTE: ALL comparisons result in a boolean value/data
 * 
 */

let cNum1=10,cNum2=20;

let cNum1GrcNum2 = cNum1 > cNum2;
console.log(`\n${cNum1} > ${cNum2} = ${cNum1GrcNum2}`);     // false

let cNum1GrEqcNum2 = cNum1 >= cNum2;
console.log(`\n${cNum1} >= ${cNum2} = ${cNum1GrEqcNum2}`);  // false

let cNum1LecNum2 = cNum1 < cNum2;
console.log(`\n${cNum1} < ${cNum2} = ${cNum1LecNum2}`);     // true

let cNum1LeEqcNum2 = cNum1 <= cNum2;
console.log(`\n${cNum1} <= ${cNum2} = ${cNum1LeEqcNum2}`);  // true

let cNum1EqcNum2 = cNum1 === cNum2;
console.log(`\n${cNum1} === ${cNum2} = ${cNum1EqcNum2}`);   // false

let cNum1NtEqcNum2 = cNum1 !== cNum2;
console.log(`\n${cNum1} !== ${cNum2} = ${cNum1NtEqcNum2}`); // true

/**
 * = vs ===
 *      =       is assignment operator, used to asgin value in a variable
 *      ===     is comparison operator, used to compare if two values are equals to each other
 * 
 * 
 * == vs ===
 *      == , === : both are comparison operators to check if two values are equals to each other
 * 
 *      === : checks two values are equal in data and datatype
 *      ==  : checks two values are equal in data
 * 
 */
console.log('\nExample for == vs ===');
let n1=10, n2='10';

let r1 = n1 === n2;
console.log(`${n1} === '${n2}' = ${r1}`);     // false

let r2 = n1 == n2;
console.log(`${n1} == '${n2}' = ${r2}`);     // true


