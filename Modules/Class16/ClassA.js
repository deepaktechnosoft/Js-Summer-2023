class ClassA {

    constructor(str1, num1) {
        console.log(`Constructor function in ClassA.\nstr1=${str1}\nnum1=${num1}`);
    }
    
    sayHello() {
        console.log('Hello from ClassA');
    }


    sayHelloToUser(username) {
        console.log(`Hello ${username} from ClassA`);
    }


}
module.exports = ClassA