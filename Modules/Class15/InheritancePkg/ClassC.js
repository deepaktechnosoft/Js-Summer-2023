const ClassB = require("./ClassB");

class ClassC extends ClassB {

    varC = 30;

    funcC() {
        console.log('Inside func-C from ClassC');
    }

    // overridden funcB in ClassC
    funcB() {
        console.log('This is new code for funcB from ClassC');
    }

    // funcC(abc) {        // <- funcC takes String-datatype as input
    //     console.log("new FuncC" + abc);
    // }

    // funcC(num) {        // <- funcC takes numer-datatype as input
    //     console.log("new FuncC" + num);
    // }

    // funcC(abc, num) {        // <- funcC takes string, number as input
    //     console.log("new FuncC" + abc + num);
    // }

    // funcC(num, abc) {        // <- funcC takes number, string as input
    //     console.log("new FuncC" + abc + num);
    // }


}
module.exports = ClassC;