/**
 * 
 * Write a program based on three numbers and displays the largest number using an if-else statement.
 * let numberOne = 30;
 * let numberTwo = 15;
 * let numberThree = 45;
 * 
 */
let numberOne = 45;
let numberTwo = 45;
let numberThree = 45;

/**
 * numberOne > numberTwo AND numberOne > numberThree
 * 
 * numberTwo > numberOne AND numberTwo > numberThree
 * 
 * numberThree > numberTwo AND numberThree > numberOne
 * 
 */

if (numberOne > numberTwo && numberOne > numberThree) {
    console.log(`Largest number is in numberOne-variable with value -> ${numberOne}`);
} else if (numberTwo > numberThree && numberTwo > numberOne) {
    console.log(`Largest number is in numberTwo-variable with value -> ${numberTwo}`);
} else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log(`Largest number is in numberThree-variable with value -> ${numberThree}`);
} else {
    console.log(`All numbers are equal to each other with value -> ${numberOne}`);
}