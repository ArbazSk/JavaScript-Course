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

// Sort Array
// it sort the number of there 1st indices
// it converts value to String and then sort
let n = [1,5,66,7,2,9,77,9,3] ;
n.sort();
console.log(n);

// sort takes compare function as an argument
// Ascending order
let a = [5,66,3,9];
// document.write(a + '<br />');
a.sort(function(x, y){
    return x - y ;
});
console.log(a);

// Descending order
let b = [1,2,3,4,5,7];
// document.write(b + '<br />');
b.sort(function(x, y){
    return y - x ;
});
console.log(b);