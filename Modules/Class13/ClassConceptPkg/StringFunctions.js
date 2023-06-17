class StringFunctions {

    /**
     * Create a function to convert any given sentence into Titlecase
     */
    toTitleCase(input) {
        const userInput_L = input.toLowerCase();
        const arrayFromUserInput = userInput_L.split(' ');
        
        for (let i=0 ; i < arrayFromUserInput.length ; i++) {
            arrayFromUserInput[i] = arrayFromUserInput[i].charAt(0).toUpperCase() + arrayFromUserInput[i].slice(1);
        }
        const userInput_TitleCase = arrayFromUserInput.join(' ');
        return userInput_TitleCase;
    }

    /**
     * Create a function to print all words from the given sentence having length>5 and contains 'i or I'
     */
    printWord(userSentence) {
        const userSentence_WordsArray = userSentence.split(' ');
        for (const word of userSentence_WordsArray) {
            if (word.length > 5 && word.toLowerCase().includes('i')) {
                console.log(word);
            }
        }
    }

    /**
     * Create a function which can generate abbreviation for any string-value
     * 
     * good Morning -> GM
     * happy NEW Year -> HNY
     */
    generateAbbreviation(userInputStr) {
        let result = '';
        const userInputStrArray = userInputStr.split(' ');

        for (const word of userInputStrArray) {
            let charAt0 = word.charAt(0);
            let charAt0_U = charAt0.toUpperCase();
            result = result + charAt0_U;
        }

        return result;
    }

}
module.exports = StringFunctions;