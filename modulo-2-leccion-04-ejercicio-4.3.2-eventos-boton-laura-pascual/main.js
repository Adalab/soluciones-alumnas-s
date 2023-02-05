'use strict';

const buttonOneEl = document.querySelector('.buttonOne');
const buttonTwoEl = document.querySelector('.buttonTwo');

buttonOneEl.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('button');
});

buttonTwoEl.addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('button');
});