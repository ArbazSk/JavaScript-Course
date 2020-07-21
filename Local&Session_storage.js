// Local Storage
// Set local storage Item
// localStorage.setItem('name', 'Smith');

// remove local storage Item
// localStorage.removeItem('name');

// get from local storage
// const name = localStorage.getItem('name');
// console.log(name);

// Clear loca storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks);
    }
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));   

    alert('Task Saved');

    e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
    console.log(task);

});
// Session
// Set session storage Item
// sessionStorage.setItem('name','john');