// REPLACE ELEMENT

// Creating Element
const newheading =  document.createElement('h2');

// Add id
newheading.id = 'task-title';
// New Text Node
newheading.appendChild(document.createTextNode('Task List'));

// get old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newheading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

// Remove by chile element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstli = document.querySelector('li:first-child');
const link = firstli.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link

// Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
val = link.hasAttribute('href');
link.removeAttribute('title');


console.log(val);















