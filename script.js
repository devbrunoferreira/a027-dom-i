'use strict';

const frutas = ["laranja", "limão", "uva"];

const laranja = document.getElementById('fruta-1');
const limao = document.getElementById('fruta-2');
const uva = document.getElementById('fruta-3');
const fruta4 = document.getElementById('fruta-4');
const buttonMain = document.getElementById('main');
let listaDeFrutas = document.getElementById('lista-de-frutas');
// console.log(listaDeFrutas.innerHTML);


// 1)
laranja.innerHTML = frutas[0];
limao.innerHTML = frutas[1];
uva.innerHTML = frutas[2];

// 2)
// buttonMain.innerHTML += '<br><label for="text">Texto: </label><br><input id="texto" name="texto" type="text">';


// 3)
function addToList() {
    fruta4.innerHTML = texto.value;
    texto.value = '';
}

// buttonMain.innerHTML += '<br><button onclick="addToList()">Add to List</button>';

console.log(laranja.innerHTML);
console.log(limao.innerHTML);
console.log(uva.innerHTML);
console.log(fruta4.innerHTML);

// for (let i = 0; i < frutas.length; i++) {
//   document.getElementById(`fruta-${[i + 1]}`).innerHTML = frutas[i]
// }


// const frutas = ["laranja", "limão", "uva"];

// const ids = ['fruta-1', 'fruta-2','fruta-3']

// ids.map((item) => {
//     document.getElementById(item).innerHTML = frutas[ids.indexOf(item)]
// })