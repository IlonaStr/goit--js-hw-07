'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', ({target}) => 
{outputName.textContent = target.value === '' ? 'незнакомец' : target.value})