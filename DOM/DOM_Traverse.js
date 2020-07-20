let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;

// Get child nodes
val = list.childNodes;  // gives NodeList
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;  // gives Number

// 1 - Element
// 2 - Attribute
// 3 - TextNode
// 8 - Comment 
// 9 - Document 
// 10 - Doctype


// Get children element nodes
val = list.children;    // gives HTMLCollection

val = list.children[1];
list.children[1].textContent = 'World';
// Childre of Children 
// list.children[1].children[0].id = 'test-link';
val = list.children[1].children[0];

val = list.firstChild;
list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next Sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous Sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);