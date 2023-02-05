'use strict';

const button = document.querySelector('.click');
let userName;

button.addEventListener('click', () => {
    userName = document.querySelector('.name').value;
    console.log('Hola ' + userName); 
});