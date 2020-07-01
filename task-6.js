'use strict';

const input = document.querySelector('#validation-input');
input.addEventListener('blur', (e) => {
    if(e.target.value.length === Number(e.target.dataset.length)) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }   
})

input.addEventListener('focus', (e) =>{
    input.classList.remove('valid');
    input.classList.remove('invalid')
})