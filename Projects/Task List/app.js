
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTask);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove Task Event
    taskList.addEventListener('click', removeTask);
    // Clear Task Event
    clearBtn.addEventListener('click', clearTassk);
    // Filter Task Event
    filter.addEventListener('keyup', filterTask);
}

// Get Task from LS
function getTask(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        
    // Create li element
    const li = document.createElement('li');
    // Add a class name
    li.className = 'collection-item';
    // Create Text node and append it to li
    li.appendChild(document.createTextNode(task));

    // create new link element
    const link = document.createElement('a');
    // Add a class name
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    });

}
// Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert("Add a Task");
    }

    //Check if the value is already in the task
    // Not Working
    // let tasks;
    // if(localStorage.getItem('tasks') === null){
    //     tasks = [];
    // } else {
    //     tasks = JSON.parse(localStorage.getItem('tasks'));
    // }
    // tasks.forEach(function(task){
    //     if(taskInput.value === task){
    //         alert('Task alredy Added');
            
    //     }
    // });


    // Create li element
    const li = document.createElement('li');
    // Add a class name
    li.className = 'collection-item';
    // Create Text node and append it to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    // Add a class name
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Store in Local Storage
    storeTaskInLS(taskInput.value);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Store Task in LS
function storeTaskInLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Remove Task from List
function removeTask(e){
    e.target.style.cursor = "pointer";
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            // remove from LS
            removeTaskFromLS(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}

// Remove from LS
function removeTaskFromLS(removeItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(removeItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task 
function clearTassk(e){
    // 1 way -- Slower
    // taskList.innerHTML = '';

    // 2 way -- Faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearFromLS();
}

// Clear all Task from LS
function clearFromLS(){
    localStorage.clear();
}

// Filter Task
function filterTask(e){
    const text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        // console.log(item);
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else {
            task.style.display = 'none';
        }
    });
}