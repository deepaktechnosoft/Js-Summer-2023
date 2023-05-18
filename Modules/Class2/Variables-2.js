/**
 * when intention is to store multiple values in a single variable
 *      Array
 *      Object
 * 
 */

/**
 * Array -> can store any number of values at the same time.
 * 
 * in JS -> typeof Array is object
 *          sqaure-brackets([]) represents Array
 */
let sports = ['BaskET ball', 'football', 'RugBy', 'SocCeR', 'RuNNiNg'];
    // created a variable (named: sports) which stores an Array-of-String

console.log(`My fav sports -> ${sports}`);            // ['BaskET ball', 'football', 'RugBy', 'SocCeR', 'RuNNiNg']
console.log(`typeof sports -> ${typeof sports}`);

/**
 * Object -> store any number of pairs (key-value pairs)
 * 
 * in JS -> typeof Object is object
 *          curly-braces({}) represents an Object
 * 
 * in Object -> all keys MUST be unique in an object
 *              keys cannot have spaces
 *              try to use key-name which relates to the value
 */

/**
 * emp no., name, addr, dept, ph, plateNumber, title, salary
 * 
 * [1234, 'John Oliver', 'CA', 'Finance', 9879879870, 'ABC123', 'ABCD', 100000000]
 * 
 * id: 1234
 * name: 'John Oliver'
 * liveInState: 'CA"
 * dept: 'Finance'
 * PhNo: 9879879870
 * plateNum: 'ABC123'
 * title: ABCD
 * salary: 100000000
 * 
 * 
 * 
 * 
 * name: 'Queen Helen'
 * title: ABCD
 * id: 1234
 * liveInState: 'CA"
 * PhNo: 9879879870
 * plateNum: 'ABC123'
 * dept: 'Finance'
 * salary: 100000000
 */

let employee1 = {};     // created a variable (named: employee1) , and assign empty object in it.

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

console.log(employee2);
console.log(employee2.plateNum);    // using dot-operator, we can get to the value of a particular key in the object
console.log(employee2.pastJobs);