class ArrayFunctions {

    /**
     * Create a function to find max value from a given number-array
     */
    findMaxInArray(inputArray) {
        let max = inputArray[0];
        for (let index=1 ; index <= inputArray.length-1 ; index++) {
            if (inputArray[index] > max) {
                max = inputArray[index];
            }
        }
        return max;
    }


}
module.exports = ArrayFunctions;