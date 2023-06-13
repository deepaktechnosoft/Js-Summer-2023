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

let employee1 = {             // created a variable (named: employee1), and assign an object to it.
    name : 'John Doe',
    age : 25,
    liveInState : 'NJ',
    gender : 'M',
    department : 'Finance',
    salary : 250000,
    firstJob : false,
    pastJob : {
        past1: 'ABC',
        past2: 'XYZ',
        past3: 'DEF'
    },
    skills : ['Finance101', 'Marketing', 'Finance102', 'Finance103']
};
console.log(employee1);

/**
 * Find the number of attributes in the employee1-object
 */
console.log('\nFind the number of attributes in the employee1-object');
let attrCount = 0;
for (const attr in employee1) {
    attrCount++;
}
console.log(`The number of attributes in employee1 is ${attrCount}`);

/**
 * Find how many attributes in the employee1 has length>7
 */

/*
 * for (let vName in objName) {
 *      // code block of for-in loop
 * }
 * 
 * vName = attr1
 * if (vName.length > 7)
 *      count++
 *
 * vName = attr2
 * if (vName.length > 7)
 *      count++
 * 
 * vName = attr3
 * if (vName.length > 7)
 *      count++
 * ...
 * ...
 * vName = attrLast
 * if (vName.length > 7)
 *      count++
 * 
 */
console.log('\nFind how many attributes in the employee1 has length>7');
let attrCountGrTh7 = 0;
let attrGrTh7 = [];
for (const attr in employee1) {
    if (attr.length > 7) {
        // attrCountGrTh7++
        // console.log(attr);
        attrGrTh7.push(attr);
    }
}
// console.log(`The number of attributes in the employee1 has length>7 is ${attrCountGrTh7}`);
console.log(`The attributes in the employee1 has length>7 -> ${attrGrTh7}`);


/**
 * Find how many attributes in the employee1 has number-as-value
 */
employee1 = {             // created a variable (named: employee1), and assign an object to it.
    name : 'John Doe',
    age : 25,
    liveInState : 'NJ',
    gender : 'M',
    department : 'Finance',
    salary : 250000,
    firstJob : false,
    pastJob : {
        past1: 'ABC',
        past2: 'XYZ',
        past3: 'DEF'
    },
    skills : ['Finance101', 'Marketing', 'Finance102', 'Finance103']
};
console.log('\nFind how many attributes in the employee1 has number-as-value');
let numValueAttrCount = 0
for (const attr in employee1) {
    if (typeof employee1[attr] === 'number') {
        numValueAttrCount++;
    }
}
console.log(`The number of attributes in the employee1 with 'number' value -> ${numValueAttrCount}`);


/**
 * forEach
 * 
 * --> works with Array and function
 * 
 * 
 * arrayName.forEach(function (vName) {
 *      code in the function for forEach loop
 * });
 * 
 * for 1st execution: vName gets copy of index-0-value from arrayName and enters in the loop and executes the function using vName-value
 * for 2nd execution: vName gets copy of index-1-value from arrayName and enters in the loop and executes the function using vName-value
 * for 3rd execution: vName gets copy of index-2-value from arrayName and enters in the loop and executes the function using vName-value
 * for 4th execution: vName gets copy of index-3-value from arrayName and enters in the loop and executes the function using vName-value
 * ...
 * ...
 * for last execution: vName gets copy of index-last-value from arrayName and enters in the loop and executes the function using vName-value
 * 
 */
let fruits = ['apple', 'BAnana', 'Cherry', 'GraPEs', 'Celery', 'BluebeRRY'];
/**
 * Print all the values of fruits-Array in below format:
 * index-0-value        console.log(fruits[0]);
 * index-1-value        console.log(fruits[1]);
 * index-2-value        console.log(fruits[2]);
 * index-3-value        console.log(fruits[3]);
 * ...
 * ...
 * ...
 * index-last-value     console.log(fruits[lastIndex]);
 */
console.log('\nUsing normal-for-loop: Print all the values of fruits-Array in below format');
for (let X=0 ; X <= fruits.length-1 ; X++) {
    console.log(fruits[X]);
}

console.log('\nUsing for-of loop: Print all the values of fruits-Array in below format');
for (let fruitName of fruits) {
    console.log(fruitName);
}

console.log('\nUsing forEach loop: Print all the values of fruits-Array in below format');
fruits.forEach(function (fruitName) {
    console.log(fruitName);
});


let sports = ['FootBAEll', 'SoCCer', 'GOLfeA', 'HocKEyoN', 'MaraTHon', 'RuGByON', 'BasketBaLl'];
/**
 * Find the sport-names which ends with "on" (ignoring cases)
 */
let sportNameEndingON = [];
/**
 * index-0
 * if (index-0-value endsWith "on")
 *      add index-0-value in sportNameEndingON-array
 * 
 * index-1
 * if (index-1-value endsWith "on")
 *      add index-1-value in sportNameEndingON-array
 * 
 * index-2
 * if (index-2-value endsWith "on")
 *      add index-2-value in sportNameEndingON-array
 */
console.log('\n\nFind the sport-names which ends with "on" (ignoring cases)');
for (let i=0 ; i < sports.length ; i++) {
    if (sports[i].toLowerCase().endsWith('on')) {
        sportNameEndingON.push(sports[i])
    }
}
console.log(`\nUsing normal-for loop: The sport-names which ends with "on" (ignoring cases) -> ${sportNameEndingON}`);


let sportNameEndingON1 = [];
for (let sportName of sports) {
    if (sportName.toLowerCase().endsWith('on')) {
        sportNameEndingON1.push(sportName);
    }
}
console.log(`\nUsing for-of loop: The sport-names which ends with "on" (ignoring cases) -> ${sportNameEndingON1}`);
let sportNameEndingON2 = [];
sports.forEach(function (sportName) {
    if (sportName.toLowerCase().endsWith('on')) {
        sportNameEndingON2.push(sportName);
    }
})
console.log(`\nUsing forEach loop: The sport-names which ends with "on" (ignoring cases) -> ${sportNameEndingON2}`);
