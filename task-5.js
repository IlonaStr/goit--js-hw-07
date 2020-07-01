'use strict';

// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');
// inputName.addEventListener('input', function(event) {
//     outputName.textContent = inputName.value === '' ? 'незнакомец' : inputName.value
// })

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', ({target}) => 
{outputName.textContent = target.value === '' ? 'незнакомец' : target.value})