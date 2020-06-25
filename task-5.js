'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const insertedText = () => {
    if(inputName === '') {
        outputName.textContent = 'незнакомец';
    } else {
        outputName.textContent = inputName.value;
    }
}
inputName.addEventListener('input', insertedText)