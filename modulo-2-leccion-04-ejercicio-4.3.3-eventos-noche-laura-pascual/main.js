'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const buttonEl = document.querySelector('.button');
const listEl = document.querySelector('.list');
const resultEl = document.querySelector('.result');

buttonEl.addEventListener('click', () => {
    listEl.innerHTML = `<p class="inception"> ${inception} </p> <p class="butterfly"> ${theButterFlyEffect} </p> <p class="eternal"> ${eternalSunshineOfTheSM} </p> <p class="blue"> ${blueVelvet} </p> <p class="split"> ${split} </p>`;

    const inceptionEl = document.querySelector('.inception');

    inceptionEl.addEventListener('click', () => {
        resultEl.innerHTML = 'La peli seleccionada es: ' + inception;
    });

    const butterflyEl = document.querySelector('.butterfly');

    butterflyEl.addEventListener('click', () => {
        resultEl.innerHTML = 'La peli seleccionada es: ' + theButterFlyEffect;
    });

    const eternalEl = document.querySelector('.eternal');

    eternalEl.addEventListener('click', () => {
        resultEl.innerHTML = 'La peli seleccionada es: ' + eternalSunshineOfTheSM;
    });

    const blueEl = document.querySelector('.blue');

    blueEl.addEventListener('click', () => {
        resultEl.innerHTML = 'La peli seleccionada es: ' + blueVelvet;
    });

    const splitEl = document.querySelector('.split');

    splitEl.addEventListener('click', () => {
        resultEl.innerHTML = 'La peli seleccionada es: ' + split;
    });
});
