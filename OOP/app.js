// Object.prototype

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return ageDate.getUTCFullYear() - 1970;
    // }
}
Person.prototype.calAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return ageDate.getUTCFullYear() - 1970;
}

const raju = new Person('raju', 'shrivastav', '8-15-1985');
const baburao = new Person('baburao', 'apte', '8-15-1975');

console.log(raju);

// prototype Inheritance

Person.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
};
const person1 = new Person('john', 'Dove');

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer()
Customer.prototype.constructor = Customer;

const customer1 = new Customer('tom', 'smith','888-888-888','premium');

console.log(customer1.greeting());

// Override greeting
Customer.prototype.greeting = function(){
    return `Hello ${this.firstName} ${this.lastName} welcome!`;
}
console.log(customer1.greeting());


// Create object using Object.create()
const personPrototypes = {
    greeting: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'mary';
mary.lastName = 'williams';
mary.age = 30;

mary.getsMarried('thompson');

console.log(mary.greeting());

// Better way
const virat = Object.create(personPrototypes, {
    firstName: {value: 'virat'},
    lastName: {value: 'kholi'},
    age: {value: 30}
});

console.log(virat);
console.log(virat.greeting());