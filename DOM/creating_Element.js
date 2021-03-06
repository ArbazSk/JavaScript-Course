// create element
const li = document.createElement('li');


// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Append node
li.appendChild(document.createTextNode('Hello World'));

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);