const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// DoubleClick
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
clearBtn.addEventListener('mousedown', runEvent);
// Mouseip
clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
card.addEventListener('mouseenter', runEvent);
// Mouseleave
card.addEventListener('mouseleave', runEvent);
// Mouseover
clearBtn.addEventListener('mouseover', runEvent);
// Mouseout
clearBtn.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove',runEvent);


// Event Handler
function runEvent(e){
    e.preventDefault(); 
    // console.clear(); 
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent =  `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, 125, ${e.offsetY})`;
}