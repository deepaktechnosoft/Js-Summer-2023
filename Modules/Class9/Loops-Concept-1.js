/**
 * When we need to repeat a block of code on different data or multiple times; we use loops
 * 
 * Loops:
 *      for
 *      while
 *      do-while
 * 
 *      for-of
 *      for-in
 *      forEach
 * 
 */

// Print 'hello World' 5-times
// counter=0
console.log('Hello World');     // counter=1    
console.log('Hello World');     // counter=2
console.log('Hello World');     // counter=3
console.log('Hello World');     // counter=4
console.log('Hello World');     // counter=5    counter <= 5    counter++

/**
 * Syntax for for-loop
 * 
 * for (initialization ; condition ; incremet/decrement) {
 *      for-loop code block
 *      code inside this block will execute as long as the condition is true
 * }
 * 
 */
console.log('\nUsing for-loop\n');
for (let counter=0 ; counter <= 5 ; counter++) {
    console.log('Hello World');
}
/**
 * 1. Create variable (counter) with initial value.
 * 2. Check the condition
 * 3. a) if condition results into true, Js enters in the code-block and execute the code
 *    b) if condition results into false, Js does NOT enter in the code-block and move ahead in the file.
 * 4. If 3a) happened that means Js entered in the code-block and executed all steps.
 *    Once all steps in the for-loop is executed, Js performs the increment/decrement operation.
 * 
 * 5. Check the condition
 * 6. a) if condition results into true, Js enters in the code-block and execute the code
 *    b) if condition results into false, Js does NOT enter in the code-block and move ahead in the file.
 * 7. If 6a) happened that means Js entered in the code-block and executed all steps.
 *    Once all steps in the for-loop is executed, Js performs the increment/decrement operation.
 * 
 * 8. Check the condition
 * 9. a) if condition results into true, Js enters in the code-block and execute the code
 *    b) if condition results into false, Js does NOT enter in the code-block and move ahead in the file.
 * 10. If 9a) happened that means Js entered in the code-block and executed all steps.
 *    Once all steps in the for-loop is executed, Js performs the increment/decrement operation.
 * and so on...
 * 
 */

let fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
/**
 * Print all the values of fruits-Array in below format:
 * 
 * index-0-value        console.log(fruits[0]);
 * index-1-value        console.log(fruits[1]);
 * index-2-value        console.log(fruits[2]);
 * index-3-value        console.log(fruits[3]);
 * ...
 * ...
 * ...
 * index-last-value     console.log(fruits[lastIndex]);
 * 
 * 
 * 
 * 
 *                      console.log(fruits[X]);     // X=0,1,2,3,...,lastIndex
 * 
 */
console.log('\nPrint all the values of fruits-Array in below format');
for (let X=0 ; X <= fruits.length-1 ; X++) {
    console.log(fruits[X]);
}

/**
 * Print the values of fruits-Array in reverse order as mentioned in below format:
 * 
 * index-last-value                     console.log(fruits[lastIndex])
 * index-second-last-value              console.log(fruits[secondLastIndex])
 * index-third-last-value               console.log(fruits[thirdLastIndex])
 * index-fourth-last-value
 * ...
 * ...
 * index-1-value                        console.log(fruits[1])
 * index-0-value                        console.log(fruits[0])                          
 * 
 * 
 * 
 *                                      console.log(fruits[X])              X <= lastIndex
 *                                                                          X >= 0
 * 
 *              x = fruit.length-1 ; x>=0 ; x--
 * 
 */
console.log('\nPrint the values of fruits-Array in reverse order as mentioned in below format');
for (let i = fruits.length-1 ; i>=0 ; i--) {
    console.log(fruits[i]);
}

/**
 * Print the values for sports-Array which has atleast 5-characters and contains "Ae" in any format(like: ae, AE, Ae, aE)
 */
// let sports = ['FootBall', 'SoCCer', 'GOLf', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
// let sports = ['FootBall', 'SoCAer', 'GOae', 'HocAEy', 'MaraETHon', 'RuGBy', 'BasketBaLl']
let sports = ['FootBAEll', 'SoCCer', 'GOLfeA', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
/**
 * has atleast 5-characters AND contains "Ae" in any format
 * 
 * if (sports[0].length >= 5 AND sports[0].toLowerCase().includes('ae'))
 *      print sports[0]
 * 
 * if (sports[1].length >= 5 AND sports[1].toLowerCase().includes('ae'))
 *      print sports[1]
 * 
 * if (sports[2].length >= 5 AND sports[2].toLowerCase().includes('ae'))
 *      print sports[2]
 * ...
 * ...
 * if (sports[lastIndex].length >= 5 AND sports[lastIndex].toLowerCase().includes('ae'))
 *      print sports[lastIndex]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * if (sports[Y].length >= 5 AND sports[Y].toLowerCase().includes('ae'))            Y=0,1,2,...,lastIndex
 *      print sports[Y]
 * 
 * 
 */
console.log('\nPrint the values for sports-Array which has atleast 5-characters and contains "Ae" in any format');
for (let Y=0 ; Y <= sports.length-1 ; Y++) {
    if (sports[Y].length >= 5 && sports[Y].toLowerCase().includes('ae')) {
        console.log(sports[Y]);
    }
}

























