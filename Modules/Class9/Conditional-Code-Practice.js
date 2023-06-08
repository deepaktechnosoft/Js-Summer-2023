/**
 * In the given array, perform below action based on the scenario.
 * Condition: All values in the sports-array is unique
 * 
 * if 'Basketball' is present at index-4 in the sports-array;
 *      print "Basketball is at index-4"
 * if 'Basketball' is present in the array but at any other index;
 *      print "Basketball is in the sports-array but not at index-4" and 
 *      replace index-4-value (if exist in the sports-array) with 'Basketball'
 * if 'Basketball' is NOT present at all in the array;
 *      print "Basketball is NOT present in the sports-array"
 *
 * const sports = [];
 * 
 * 
 * if (indexOf)
 * else if (includes)
 * else
 * 
 */
const sports = ['FootBall', 'Basketball'];
if (sports.indexOf('Basketball') === 4) {
    console.log("Basketball is at index-4");
} else if (sports.includes('Basketball')) {
    console.log("Basketball is in the sports-array but not at index-4");
    // replace index-4-value (if exist in the sports-array) with 'Basketball'
    /*
        [X, X, X, X, X]
    */
   if(sports.length >= 5) {
        // replace index-4-value with 'Basketball'
        sports.splice(4, 1, 'Basketball');
        // sports.fill('Basketball', 4, 5);
   }
} else {
    console.log("Basketball is NOT present in the sports-array");
}


/**
 * Write a program based on given password and displays a message based on the password using an if-else statement:
 * let password = 'Test1233';
 * 
 * If the password is less than 8 characters, display "Password too short".
 * If the password contains both letters and numbers (RegEx), display "Password accepted".
 * If the password does not meet either of the above conditions, display "Password rejected".
 * 
 */

/**
 * Q1:
 * create a variable myNumber and assign any (numeric) value to it.
 * 
 * if myNumber-value is divisible by 5, print 'divisible by 5'
 * if myNumber-value is divisible by 3, print 'divisible by 3'
 * if myNumber-value is divisible by 5 and 3, print 'divisible by 5 and 3'
 * if myNumber-value is NOT divisible by 5 or 3, print the value of myNumber
 * 
 * myNumber = 17
 * 
 */

/**
 * Q2:
 * const sports = ['Basketball', 'Football', 'Rugby', 'Swimming', 'Soccer', 'Baseball'];
 * 
 * if Basketball is present at index-2 (ignoring cases), Print 'Basketball is present at index-2
 * if Baseketball is not present at index-2 (ignoring cases), print 'Basketball is not present at index-2'
 * if Basketball is not present in the array, replace, index-2-value with 'Basketball; and print sports-array
 * 
 * 
 */

/**
 * Q3:
 * const planets = ['MarS', 'MerCUrY', 'MaRS', 'JuPITer'];
 * 
 * if the 'Earth' is present as the first-element in the array, print "Earth is present at the correct place"
 * otherwise, Add 'Earth' as the first-element in the array; then print the planets-array
 * 
 */

/**
 * Q4:
    Create a software, based on the given day-name; print the task of the day.

    if day is Mon, Monday -> print ("Today is the Technosoft class")
    if day is Tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")    
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is Sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY   (mon/monday)
 */