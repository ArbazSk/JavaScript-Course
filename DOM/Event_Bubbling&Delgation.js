// EVENT BUBBLING 

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
});

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card-content');
});

document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card ');
});

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', delteItem);

document.body.addEventListener('click', delteItem);

function delteItem(e){

    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
    }

    // Remove the li element
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
    
    
}