const ArrayFunctions = require("./ArrayFunctions");
const StringFunctions = require("./StringFunctions");

/**
 * If we want to access any function from a different class;
 * we need to create object of the class (if not created already) in which the function is present
 * 
 * Syntax to create object of a class
 * let objName = new ClassName();
 */

// Create abbreviation for given sentence
let data = "Filled with joy";

let sf = new StringFunctions();
let abbr = sf.generateAbbreviation(data);

console.log('\nCreate abbreviation for given sentence');
console.log(`data -> ${data}`);
console.log(`abbr -> ${abbr}`);


// convert the given data into Titlecase
let myData = "whAT IS aN exAMplE of a pHrAsE?";
const myDataTitleCase = sf.toTitleCase(myData);
console.log('\nConvert the given data into Titlecase');
console.log(`Given data -> ${myData}`);
console.log(`Converted data -> ${myDataTitleCase}`);

// Find the max value from given array
let nums = [89,43, 34, 78, 45, 90, 11, 76, 34];
let af = new ArrayFunctions();
let maxValue = af.findMaxInArray(nums)
console.log('\nFind the max value from given array');
console.log(`Given array -> ${nums}`);
console.log(`Max value -> ${maxValue}`);
