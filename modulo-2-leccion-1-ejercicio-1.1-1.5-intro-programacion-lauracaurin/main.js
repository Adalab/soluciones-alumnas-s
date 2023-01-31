'use strict';  //Sirve para mejorar la rapidez de ejecución del código y hará que el navegador nos muestre errores

//Sentencia o statement. Escribimos cada orden en una línea y ponemos un punto y coma al final:
  
    //document.querySelector('h1').innerHTML = '¡Hola mundo!';


// 1. MODIFICAR O AÑADIR CONTENIDO
const title = document.querySelector ('.title');
title.innerHTML = title.innerHTML + ' mundo';


// 2. SELECCIONANDO ADALABERS
const selection = document.querySelector ('.selection');
const bea = document.querySelector ('.bea');
const enrica = document.querySelector ('.enrica');

//election.innerHTML = selection.innerHTML + ' ' + bea.innerHTML;
selection.innerHTML = selection.innerHTML + ' ' + enrica.innerHTML;


// 3. AÑADIR ETIQUETAS Y CONTENIDO
const container = document.querySelector('.container');
const content = '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe ducimus ullam mollitia placeat earum</p>';

container.innerHTML = content;


// 4. MODIFICAR CLASES. Desabilitando botones.

// sectionA.classList.add('hidden'); (añade la clase hidden)
// sectionB.classList.remove('hidden'); (quita la clase hidden)
const button = document.querySelector('.button');

button.classList.add('button--opacity');


//getElementById

// const mainTitle = document.querySelector('#mainTitle');









