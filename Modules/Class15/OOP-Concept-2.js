/**
 * OOP Concept - Object Oriented Programming
 * 
 * 1. Encapsulation
 *      Wrapping up the code in a single unit (i.e Class)
 *      To implement te Encapsulation concet, we create Class and write code in it.
 * 
 * 
 * 2. Abstraction
 *      Hiding unnecesary information from user.
 *      To implement Abstraction concept, we create functions.
 * 
 * 
 * 
 * 3. Inheritance
 *      -> If we establish parent-child relation between two classes then child-class inherits ALL variable/functions from parent-class (except the private variables/functions of parent-class)
 *      -> To implement Inheritance (or to set-up parent-child relation between two classes);
 *          we use "extends" keyword with child-class.
 *      -> a class can extend ONLY one class (why? - Diamond Problem)
 * 
 * 
 * 
 * 4. Polymorphism
 *      same name but more than 1 form
 *      when we have two or more functions with SAME name
 *      Types:
 *      1. Compile Time Polymorphism (Static Binding, Method Overloading) -> does NOT exist in JS
 *          In a class, when we have two or more functions with SAME name but different input-parameters.
 *          Ways to set different input-parameters:
 *          a) different number of input-parameters
 *          b) different datatype of input-parameters
 *          c) different sequence of input-aprameters
 * 
 *      2. Run Time Polymorphism (Dynamic Binding, Method Overriding)
 *          -> This can be done only in Inheritance set-up
 *          -> when we have a function in childClass with SAME name and SAME input-parameters as of in ParentClass
 *              This is possible due to Run Time Polymorphism.
 * 
 */