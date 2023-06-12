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
/**
 * Syntax of while-loop:
 * 
 * initialization
 * while (condition) {
 *      while-loop code block
 *      code inside this block will execute as long as the condition is true
 *      incremet/decrement      <--- MUST BE the LAST LINE in the while-loop code block
 * }
 */
console.log('\nPrinting "Hello World" using while-loop');
let wCounter=1;
while (wCounter <= 5) {
    console.log('Hello World');
    wCounter++
}

let fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
console.log('\nPrint all the values of fruits-Array in below format');

let fruitIndex=0;
while (fruitIndex <= fruits.length-1) {
    console.log(fruits[fruitIndex]);
    fruitIndex++;
}

let sports = ['FootBAEll', 'SoCCer', 'GOLfeA', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl']
console.log('\nPrint the values for sports-Array which has atleast 5-characters and contains "Ae" in any format');
let sportIndex=0;
while (sportIndex <= sports.length-1) {
    if (sports[sportIndex].length >= 5 && sports[sportIndex].toLowerCase().includes('ae')) {
        console.log(sports[sportIndex]);
    }
    sportIndex++
}

/**
 * Syntax of do-while-loop:
 * 
 * initialization
 * do {
 *      do-while loop code block
 *      code inside this block will execute as long as the condition is true
 *      incremet/decrement      <--- MUST BE the LAST LINE in the while-loop code block
 * } while (condition)
 * 
 * 
 * -> Code inside the do-while will always run/execute atleast once
 *      (bcz, do-while checks the condition before second-execution of the loop)
 *      whereas, for and while-loop does check the condition before first-execution of the loop
 * 
 */
console.log('\nPrinting "Hello World" using do-while-loop');
let dwCounter=1;
do {
    console.log('Hello World');
    dwCounter++
} while (dwCounter <= 5)


console.log('\nUsing do-while-loop: Print all the values of fruits-Array in below format');

let fruitIndex1=0;
do {
    console.log(fruits[fruitIndex1]);
    fruitIndex1++;
} while (fruitIndex1 <= fruits.length-1)



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
fruits = [];
console.log('\nPrint all the values of fruits-Array in below format');
console.log('\nUsing for-loop');
for (let X=0 ; X <= fruits.length-1 ; X++) {
    console.log(fruits[X]);
}

console.log('\nUsing while-loop');
let fruitIndex_w=0;
while (fruitIndex_w <= fruits.length-1) {
    console.log(fruits[fruitIndex_w]);
    fruitIndex_w++;
}

console.log('\nUsing do-while-loop');
let fruitIndex_dw=0;
do {
    console.log(fruits[fruitIndex_dw]);
    fruitIndex_dw++;
} while (fruitIndex_dw <= fruits.length-1)

/**
 * for-of loop
 * 
 * -> works only with Array and String
 * -> Using loop, if you need to pick index-0-value, index-1-value, index-2-value and so no...
 * 
 * Syntax of for-of loop:
 * for (let vName of arrayName) {
 *      code block of for-of loop
 * }
 * 
 * for 1st execution: vName gets copy of index-0-value from arrayName and enters in the loop and executes the code in the loop
 * for 2nd execution: vName gets copy of index-1-value from arrayName and enters in the loop and executes the code in the loop
 * for 3rd execution: vName gets copy of index-2-value from arrayName and enters in the loop and executes the code in the loop
 * for 4th execution: vName gets copy of index-3-value from arrayName and enters in the loop and executes the code in the loop
 * ...
 * ...
 * for last execution: vName gets copy of index-last-value from arrayName and enters in the loop and executes the code in the loop
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * for (let vName of strName) {
 *      code block of for-of loop
 * }
 * 
 * 
 * 
 * for 1st execution: vName gets copy of index-0-value from strName and enters in the loop and executes the code in the loop
 * for 2nd execution: vName gets copy of index-1-value from strName and enters in the loop and executes the code in the loop
 * for 3rd execution: vName gets copy of index-2-value from strName and enters in the loop and executes the code in the loop
 * for 4th execution: vName gets copy of index-3-value from strName and enters in the loop and executes the code in the loop
 * ...
 * ...
 * for last execution: vName gets copy of index-last-value from strName and enters in the loop and executes the code in the loop
 * 
 * 
 */
fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
console.log('\nUsing for-of loop: Print all the values of fruits-Array in below format');

for (let fruitName of fruits) {
    console.log(fruitName);
}

console.log('\nUsing for-of loop on a String');
let sentence = "hello dear";
for (let x of sentence) {
    console.log(x);
}

sports = ['FootBAEll', 'SoCCer', 'GOLfeA', 'HocKEy', 'MaraTHon', 'RuGBy', 'BasketBaLl'];
/**
 * Print the values from index-2
 */
console.log('\nUsing for-loop: Print the values from index-2');
for (let X=2 ; X <= sports.length-1 ; X++) {
    console.log(sports[X]);
}


console.log('\nUsing for-of-loop: Print the values from index-2');
let index = 0;
for (let vName of sports) {
    if (index >= 2) {
        console.log(vName);
    }
    index++;
}





fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
/**
 * Find the index at which baNaNA (ignoring cases) is present
 */
console.log('\nUsing for-loop: Find the index at which baNaNA (ignoring cases) is present');
let toFind = 'baNaNA'.toLowerCase();
for (let x=0 ; x <= fruits.length-1 ; x++) {
    if (fruits[x].toLowerCase().localeCompare(toFind) === 0) {
        console.log(`The index at which baNaNA (ignoring cases) is present -> ${x}`);
        break;
    }
}


/**
 * Find the index at which baNaNA and CeleRY (ignoring cases) are present
 */
console.log('\nUsing for-of and for-loop: Find the index at which baNaNA and CeleRY (ignoring cases) is present');
let toFindArray = ['baNaNA' , 'CeleRY', 'AppLE'];

for (let fruitName of toFindArray) {
    let toFind = fruitName.toLowerCase();
    for (let x=0 ; x <= fruits.length-1 ; x++) {
        if (fruits[x].toLowerCase().localeCompare(toFind) === 0) {
            console.log(`The index at which ${fruitName} (ignoring cases) is present -> ${x}`);
            break;
        }
    }
}


console.log('\nUsing for-loop: Find the index at which baNaNA and CeleRY (ignoring cases) is present');
for (let y=0 ; y <= toFindArray.length-1 ; y++) {
    let toFind = toFindArray[y].toLowerCase();
    for (let x=0 ; x <= fruits.length-1 ; x++) {
        if (fruits[x].toLowerCase().localeCompare(toFind) === 0) {
            console.log(`The index at which ${toFindArray[y]} (ignoring cases) is present -> ${x}`);
            break;
        }
    }
}

/**
 * for-in loop
 * 
 * -> works with object
 * 
 * Syntax of for-in loop:
 * for (let vName in objName) {
 *      // code block of for-in loop
 * }
 * 
 * 
 * for 1st execution: vName gets first-Key from objName and enters in the loop and executes the code in the loop
 * for 2nd execution: vName gets second-Key from objName and enters in the loop and executes the code in the loop
 * for 3rd execution: vName gets third-Key from objName and enters in the loop and executes the code in the loop
 * for 4th execution: vName gets fourth-Key from objName and enters in the loop and executes the code in the loop
 * ...
 * ...
 * for last execution: vName gets last-Key from objName and enters in the loop and executes the code in the loop
 * 
 */
console.log('\nfor-in loop');
let employee2 = {       // created a variable (named: employee2) , and assign an object in it.
    name : 'Queen Helen',
    id : 1234,
    liveInState : 'CA',
    phNo : 9879879870,
    plateNum : 'abc 123',
    department : 'Finance',
    salary : 100000000,
    pastJobs : ['Google', 'ABC', 'XYZ']
}

for (let attr in employee2) {
    console.log(`For key = ${attr}, has value = ${employee2[attr]}`);
}














