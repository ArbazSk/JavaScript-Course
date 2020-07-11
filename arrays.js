// Arrays
// Holds multiple values

// Arrays using Constructor
const num = new Array(1,2,3,4,5);
console.log(num[0]);

// Array Literal
const name = ['Adam', 'John', 'Tony']
console.log(name[1]);

// Arrays Method
// push() - add at last 
name.push('Hulk');
console.log(name);

//unshift() - add at 1st index
name.unshift('Hawlk eye');
console.log(name);

//pop() - removes last element 
console.log(name.pop());

//isArray() - check it is array or not
console.log(Array.isArray(name)); // return true
console.log(Array.isArray('hello')); // return false

// indexOf()
console.log(name.indexOf('Tony'));