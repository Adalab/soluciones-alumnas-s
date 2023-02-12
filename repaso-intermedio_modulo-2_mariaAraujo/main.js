'user strict'
//Por defecto: happy_smile.

//Botón Update:
//      - Recoge el estado del select y lo cambia por el actual.
//      - Generará un número aleatorio de 100 como máximo:
//          * si el número es par: color de fondo #ffcc00.(módulo)
//          * si el múmero es impar: color fondo #ff9900.

// Evento click sobre Update.

const faceSelect = document.querySelector('.js_face-select');
const btn = document.querySelector('.js_btn');
const face = document.querySelector('.js_face');
const body = document.querySelector('.js_body');

face.innerHTML = ':)'; //para que al cargar la página aparezca por defecto :)

function handleClick () {
   if (faceSelect.value === 'happy'){
      face.innerHTML = ':)';
      changeColor()
   };
   if (faceSelect.value === 'sad'){
      face.innerHTML = ':(';
      changeColor()
   }
}

btn.addEventListener("click" , handleClick);

function changeColor() {
   const min = Math.ceil(1);
   const max = Math.floor(100);
   let num = Math.floor(Math.random() * (max - min + 1) + min);
   if (num%2 === 0){
      body.classList.remove('body_impar');
      body.classList.add('body_par');
   }else{
      body.classList.remove('body_par');
      body.classList.add('body_impar');
   }
}


// function getRandomIntInclusive(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function changeColor(){
//    let num = getRandomIntInclusive(1, 100);
//    if (num%2 === 0){
//       body.classList.remove('body_impar');
//       body.classList.add('body_par');
//    }else{
//       body.classList.remove('body_par');
//       body.classList.add('body_impar');
//    }
// }