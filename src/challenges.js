// Desafio 1
const girafa = true;
const elefante = true;
const macaco = false;
function compareTrue(animal1, animal2) {
  if (animal1 && animal2 === true) {
    return true;
  } return false;
}
compareTrue(macaco, elefante);
compareTrue(macaco, macaco);
compareTrue(girafa, elefante);
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);
// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}
splitSentence('go Trybe');
splitSentence('Vamo que Vamo');
splitSentence('foguete');
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
