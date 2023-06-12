/**
 * Object -> store any number of pairs (key-value pairs)
 * 
 * in JS -> typeof Object is object
 *          curly-braces({}) represents an Object
 * 
 * in Object -> all keys(attribute/property) MUST be unique in an object
 *              keys cannot have spaces
 *              try to use key-name which relates to the value
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


/**
 * To access value of a particular key/attribute/property
 *      dot-operator
 *          OR
 *      square-bracket
 * 
 * 
 * if the key is a string OR key-contains spaces OR key is a number OR key is present in a variable, we HAVE TO use square-bracket
 * 
 * if any attribute is NOT present in the object and we try to get it's value, object return undefined
 * 
 */

let attr = 'name';
console.log(employee2.attr);
console.log(employee2[attr]);       // console.log(employee2['name']);

/**
 * To add a key-value pair in a object:
 *      dot-operator
 *          OR
 *      square-bracket
 * 
 * if the key is a string OR key-contains spaces OR key is a number OR key is present in a variable, we HAVE TO use square-bracket
 * 
 * 
 */
console.log("\nAdding 'gender-M' in the employee2");
employee2.gender = 'M';
console.log(employee2);

console.log("\nAdding 'team names - ['team1','team2','team3','team4']' in the employee2");
employee2['team names'] = ['team1','team2','team3','team4'];
console.log(employee2);

console.log("\nAdding 'gender-F' in the employee2");
employee2.gender = 'F';         // As gender-key is already present, it will replace old-value with new-value
console.log(employee2);


/**
 * To delete the key/attribute/property from an object
 * operator - delete
 * 
 * operator find the given key in the object then delete it OR if the given key is NOT present in the object
 *      operator returns true
 *
 * 
 * Note: delete operator changes the original object.
 * 
 * if the key is a string OR key-contains spaces OR key is a number OR key is present in a variable, we HAVE TO use square-bracket
 * 
 */
console.log('\n\nDeleting "gender" key from employee2');
console.log(`is deleted "gender" attribute" -> ${delete employee2.gender}`);
console.log(employee2);

console.log('\n\nDeleting "team names" key from employee2');
console.log(`is deleted "team names" attribute" -> ${delete employee2['team names']}`);
console.log(employee2);

/**
 * To find if a given data is EXACTLY present as one of the keys (attribute/property)
 * operator - in
 * 
 * if the given data is EXACTLY present as one of the keys
 *      operator returns true
 * otherwise
 *      operator returns false
 * 
 */

const isKey_name = 'name' in employee2;
console.log(`\nis 'name' present as of the keys -> ${isKey_name}`);

const isKey_LiveInState = 'LiveInState' in employee2;
console.log(`\nis 'LiveInState' present as of the keys -> ${isKey_LiveInState}`);

const isKey_Finance = 'Finance' in employee2;
console.log(`\nis 'Finance' present as of the keys -> ${isKey_Finance}`);
