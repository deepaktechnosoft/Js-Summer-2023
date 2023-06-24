/**
 * Exception:
 *      unexpected situation/error which we need to handle
 * 
 * To handle exception, use try-catch block
 * 
 * In try-block:
 *      we write the code which may or may-not throw exception.
 * In catch block:
 *      we write the code that must execute in case exception happens
 *      (In other words, instead on crashing the pogram when execption happens;
 *       run the code form catch-block)
 * 
 * 
 * In try block, we can have multiple lines of code
 *      If exception happens in try-block, JS jumps into catch block and executes it; 
 *      AND never go back into try-block.
 * 
 *      If no-exception happens in try-block, JS is NOT going to enter in catch-block.
 * 
 * 
 * finally vs final
 * 
 * finally:
 *      is an optional code block which we use with try-catch block.
 *      Code in finally is ALWAYS going to execute whether exception happens in try-block or not.
 * final:
 *      is a keyword in Java use to define const-variables
 *      in JS, we use const-keyword for the same purpose.
 * 
 */

/**
 * In Java: there is a keyword called final (which is same as const in JS)
 */

/**
 * whenever we try to connect with external system
 * 
 * 1. create a connection with system
 * 2. system accepts the connection
 * 3. read the file / get data from database
 * 4. disconnection from the system
 * 5. close the connection
 * 
 * 
 * try
 * 1. create a connection with system
 * 2. system accepts the connection
 * 3. read the file / get data from database
 * 
 * finally
 * 4. if (connected) -> disconnection from the system
 * 5. if (connection) -> close the connection
 * 
 */