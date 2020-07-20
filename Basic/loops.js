const todos = [
    {
        id:1,
        text: "Take out Trash",
        isComplete: true
    },
    {
        id: 2,
        text: "Complete one Module",
        isComplete: false
    },
    {
        id: 3,
        text: "Make Food",
        isComplete: false
    }
];
console.log(todos[1].text);

// for loop
for(let i=0; i<10; i++){
    console.log(`i = ${i}`);
}

// while loop
let i = 0;
while(i<10){
    console.log(`i = ${i}`);
    i++;
}

// loops through array
for(let i = 0; i < todos.length; i++){
    console.log(`${todos[i].id} is ${todos[i].text}`);
}

// better way
for(let t of todos){
    console.log(t.text);
}

// HIgher order Array Method
//forEach 
console.log("ForEach");
todos.forEach(function(todo){
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log("MAP");
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isComplete === true;
});
console.log("Filter");
console.log(todoCompleted);

// filtering and returning the text only
const t = todos.filter(function(todo){
    return todo.isComplete === false;
}).map(function(todo){
    return todo.text;
});
console.log(t)