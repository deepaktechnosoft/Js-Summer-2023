const NumberFunctions = require("./NumberFunctions");

class GreetingFunctions {

    userName = "Default Name";
    userAge = 0;
    userAddress = 'TX';


    /**
     * Create a function to print Hello
     */
    printHello() {         // defining the function
        console.log('Hello');
    }

    /**
     * Create HelloUser function in a way that userName ALWAYS print in the titlecase
     */
    helloUser(userName) {      // username is the local-variable to this function (scope of username-variable is helloUser function)
        userName = m.toTitleCase(userName);
        console.log(`Hello ${userName}`);

        // using add2Nums from NumberFunctions-class
        // let abc = new NumberFunctions();
        // abc.add2Nums(2, 3);

    }



}
module.exports = GreetingFunctions