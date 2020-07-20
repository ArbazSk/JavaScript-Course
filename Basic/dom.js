// console.log(document.querySelectorAll('.item'));
// const btn = document.querySelector('.btn');

const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput === ''){
        msg.classList.add('error');
        msg.innerHTML = '<p>Please Enter fields</p>';

        setTimeout(() => msg.remove(), 3000);

    } else {
        // console.log('Success'); 
        
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }

}