const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// Clear input
taskInput.value = "";

form.addEventListener('submit', runEvent);

// keydown
// taskInput.addEventListener('keydown', runEvent);

//keyup
// taskInput.addEventListener('keyup', runEvent);

//keyup
// taskInput.addEventListener('keypress', runEvent);

//Focus
taskInput.addEventListener('focus', runEvent);

//Blur
taskInput.addEventListener('blur', runEvent);

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input    -- all key are input
taskInput.addEventListener('input', runEvent);

// Change
taskInput.addEventListener('change', runEvent);


function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);
    // console.log(e.code);
    e.preventDefault();
}