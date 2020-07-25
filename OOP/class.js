class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    
    getMarried(newLastName){
        this.lastName = newLastName;
    }

    static addNum(x, y){
        return x + y;
    }
}

const mary = new Person('Mary', 'williams');
mary.getMarried('thompson');   
console.log(mary) ;


// Sub-Class
class Persons {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    
    
}

class Customer extends Persons {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('john', 'doe','888-888-888', 'standard');
console.log(john);
console.log(Customer.getMembershipCost());