/**
 * Constructor
 * 
 *      1. It's a special function.
 *          In general: name of constructor-function is SAME as name of the class.
 *          In JS: name of constructor-function is "constructor"
 *      2. In order to create an object of the class, JS has to execute the constructor function.
 *          If constructor function got executed completely then object gets created otherwise not created.
 *      3. When ther is NO constructor defined by the user
 *          JS: creates a default constructor, executes it in order to create the object.
 *         When there is a constructor defined by user
 *          JS: uses the constructor created by user, and NEVER defines the default constructor.
 *      4. Constructor function can have input-parameters as well.
 *      5. In general: we can have two or more constructors in a class.
 *          Constructor Overloading: In a class, when we have two or more constructors with SAME name but different input-parameters.
 *          Method Overloading: In a class, when we have two or more functions with SAME name but different input-parameters.
 *         In JS: we CANNOT have two or more constructors in a class
 *      6. In general function may or may not have return statement
 *         In constructor, we NEVER have any return statement.
 * 
 */