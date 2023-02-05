'use strict';
let inputNameEl = document.querySelector('.inputText');
let repeatNameEl = document.querySelector('.pText');

inputNameEl.addEventListener("keyup", (event)=>{
    inputNameEl = event.currentTarget.value;
    repeatNameEl.innerHTML = inputNameEl; 
});
