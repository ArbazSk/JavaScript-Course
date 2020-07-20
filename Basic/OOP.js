// Using Function
// Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob;
    this.dob = new Date(dob);
    // this.getBirthYear = function(){
    //     return this.dob.getFullYear();
    // };
    // this.getFullName = function(){
    //     return `${this.firstName}  ${this.lastName}`;
    // };
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();    
}

Person.prototype.getFullName = function(){
    return `${this.firstName}  ${this.lastName}`;
}

// Instantiate Object
const person1 = new Person('john', 'Dave', '2-8-1986');
console.log(person1.firstName, person1.lastName, person1.dob);
console.log(person1.firstName, person1.lastName, person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);


// Class
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getFullName(){
        return `${this.firstName}  ${this.lastName}`;
    }
    getBirthYear(){
        return this.dob.getFullYear(); 
    }
}

// Instantiate Object
const person2 = new Person('Smith', 'Dave', '2-8-1986');
console.log(person2.getFullName());
console.log(person2);