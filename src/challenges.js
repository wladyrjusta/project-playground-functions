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
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);
// Desafio 6
const arrayNum1 = [9, 0, 2, 3, 9, 5, 7];
const arrayNum2 = [0, 4, 4, 4, 9, 2, 1];
const arrayNum3 = [0, 0, 0];
function highestCount(arrayNums) {
  var indexX = 0;
  var maiorNum = Math.max.apply(null, arrayNums);
  for (var index of arrayNums) {
    if (index === maiorNum) {
      indexX += 1;
    }
  }
  return indexX;
}
console.log(highestCount(arrayNum1));
console.log(highestCount(arrayNum2));
console.log(highestCount(arrayNum3));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';   
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return'cat1'; 
 }
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 3, 3));
// Desafio 8
const array1 = [2, 15, 7, 9, 45];
const array2 = [7, 9];
const array3 = [9, 25];
function fizzBuzz(paramArray) {
  for (let arrayIndex in paramArray) {
    if (paramArray[arrayIndex] % 5 === 0) {
      return paramArray.splice([arrayIndex], 1, 'fizzBuzz');
    } else if (paramArray[arrayIndex] % 3 === 0) {
      return paramArray.splice([arrayIndex], 1, 'fizz');
    } else {
      return paramArray.splice([arrayIndex], 1, 'bug!');
    }
  }
}
console.log(fizzBuzz(array1));
fizzBuzz(array2);
fizzBuzz(array3);
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
