//PROTOTYPE
//a)
//Implementing a simple inheritance chain using prototypes ,
// and demonstraring how properties/methods are inherited


function Person (name,age){
    this.name=name;
    this.age=age;

    Person.prototype.greet= function(){
        return `Hello, my name is ${this.name}, and my age is ${this .age}`

    }

}

function Employee(name,age,position){
    Person.call(this,name,age); //inheriting properties from Person constructor
    this.position=position;

}
Employee.prototype=Object.create(Person.prototype); //employee can inherit  all methods from Person's prototype
Employee.prototype.constructor=Employee; // to make sure the employee constructor correctly points to the employee constructor not person

Employee.prototype.work = function(){
    return `mr/mrs ${this.name} is working as ${this.position}`
}

let employee1=new Employee("Kamali",21, "Software Developer");
console.log(employee1.greet());
console.log(employee1.work());

//PROTOTYPE
//b)
//Create a constructor function and add methods to its prototype. 
//Then, create instances of the constructor and observe how they share the methods.
function Student (name,id){
    this.name=name;
    this.id=id;

    Student.prototype.welcomeStudent=function(){
        return `Hello dear ${this.name} welcome back to school`;
    }
}

let student1= new Student("Muhayimana", 2654);
let student2= new Student("Uwera", 2644);
console.log(student1.welcomeStudent());
console.log(student2.welcomeStudent());