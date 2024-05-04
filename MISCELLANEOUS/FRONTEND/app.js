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
function Person(name, age){
    this.name = name;// Refers to same copy
    this.age = age;//this does not make a new copy everytime
}//constructor syntax

Person.prototype.talk = function(){
    console.log(`Hi! My name is ${this.name}`);
}

let p1 = new Person("anam",25)//instance 1
let p2 = new Person("anab",26)//instance 2
//This method is efficent but there is also more efficinet method - Classes.
//=========================================================================
//Classes




