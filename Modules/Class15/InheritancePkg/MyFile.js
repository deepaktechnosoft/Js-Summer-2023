const ClassA = require("./ClassA");
const ClassC = require("./ClassC");


const a = new ClassA();     // ->  creating object of ClassA

// using object-a I can access the variables/functions of ClassA

const obj = new ClassC();   
// using obj, which class var/func I can access? -> ClassC

// obj.funcC();

// obj.funcC("test");

// obj.funcC(10);

// obj.funcC("test", 10);

// obj.funcC(10, "test");

obj.funcB();

obj.funcA();
