//Factory function=========================
// Simply a function which is an efficient way to create multiple objs
// Disadvantages = every obj makes its own copy so its not most efficent
// New operator method is more efficent
// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi, My name is ${this.name}`);
//         }
//     }
//     return person;
// }
//===================================================================
//Constructors (New operator) - Dosent return anything
// Start with capital letter
// function Person(name, age){
//     this.name = name;// Refers to same copy
//     this.age = age;//this does not make a new copy everytime
// }//constructor syntax

// Person.prototype.talk = function(){
//     console.log(`Hi! My name is ${this.name}`);
// }

// let p1 = new Person("anam",25)//instance 1
// let p2 = new Person("anab",26)//instance 2
//This method is efficent but there is also more efficinet method - Classes.
//=========================================================================
//Classes
//constructor method is a special method of a class for creating and initializing
//an object of that of a class.

// class person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi! My name is ${this.name}`);
//     }
// }
// let p1 = new person("adam",25)
// let p2 = new person("mada",15)

//Inheritance
// Inherit properties of parent class into child class
// Use extends keyword to connect the parent class
// Use suoer keyword to inherit properties.

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, I am ${this.name}`);
//     }
// }

// class Student extends Person{
//     constructor(name, age ,marks) {
//         super(name, age);//Parent class constructor is being called
//         this.marks = marks;
//     }
// }

// let stu1 = new Student("adam", 25, 95)

// class Teacher extends Person{
//     constructor(name, age , subject) {
//         console.log("Person clas onstructor");
//         super(name, age);
//         this.subject = subject;
//     }
// }

// let t1 = new Student("eve", 32, maths)










