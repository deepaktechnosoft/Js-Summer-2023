const ClassA = require("./ClassA");

class ClassB extends ClassA {

    varB = 20;

    funcB() {
        console.log('Inside func-B from ClassB');
    }

}
module.exports = ClassB;