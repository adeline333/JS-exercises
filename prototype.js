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