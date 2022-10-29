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
const arrayString1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const arrayString2 = ['foguete', 'não', 'tem', 'ré'];
const arrayString3 = ['captain', 'my', 'captain'];
function concatName(arrayStrings) {
  return `${arrayStrings[arrayStrings.length - 1]} ${arrayStrings[0]}`;
}
console.log(concatName(arrayString1));
console.log(concatName(arrayString2));
console.log(concatName(arrayString3));
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);
// Desafio 6
const arrayNum1 = [9, 1, 2, 3, 9, 5, 7];
const arrayNum2 = [0, 4, 4, 4, 9, 2, 1];
const arrayNum3 = [0, 0, 0];
function highestCount(arrayNums) {
  let counts = {};
  arrayNums.forEach((count) => {
    counts[count] = (counts[count] || 0) + 1;
  });
  const maxVal = Math.max(...Object.values(counts));
  const num = Object.keys(counts).find((key) => counts[key] === maxVal);
  return `Maior númerodo do array= ${num} se repete= ${maxVal}`;
}
highestCount(arrayNum1);
highestCount(arrayNum2);
highestCount(arrayNum3);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1win = cat1 - mouse;
  const cat2win = cat2 - mouse;
  if (cat1win > cat2win) {
    console.log('cat2');
  } else if (cat2win > cat1win) {
    console.log('cat2');
  } return 'os gatos trombam e o rato foge';
}
catAndMouse(5, 2, 3);
catAndMouse(13, 7, 1);
catAndMouse(5, 3, 3);
// Desafio 8
const array1 = [2, 15, 7, 9, 45];
const array2 = [7, 9];
const array3 = [9, 25];
function fizzBuzz(paramArray) {
  for (let arrayIndex in paramArray) {
    if (paramArray[arrayIndex] % 5 === 0) {
      paramArray.splice([arrayIndex], 1, 'fizzBuzz');
    } else if (paramArray[arrayIndex] % 3 === 0) {
      paramArray.splice([arrayIndex], 1, 'fizz');
    } else {
      paramArray.splice([arrayIndex], 1, 'bug!');
    }
  }
}
fizzBuzz(array1);
fizzBuzz(array2);
fizzBuzz(array3);
console.log(array2);
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
