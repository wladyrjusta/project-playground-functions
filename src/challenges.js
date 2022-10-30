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
function fizzBuzz(arrayNumString) {
 var strings = []; 
 for (var index of arrayNumString) {
  if (index % 3 === 0 && index % 5 === 0) {
    strings.push('fizzBuzz');
  } else if (index % 5 === 0) {
    strings.push('buzz');
  } else if (index % 3 === 0) { 
    strings.push('fizz');
  } else {
    strings.push('bug!')
  } 
 }
 return strings;
}
console.log(fizzBuzz(array1));
console.log(fizzBuzz(array2));
console.log(fizzBuzz(array3));
// Desafio 9
function encode(arrayEncode) {
arrayEncode = arrayEncode.replace(/a/g, 1);
arrayEncode = arrayEncode.replace(/e/g, 2);
arrayEncode = arrayEncode.replace(/i/g, 3);
arrayEncode = arrayEncode.replace(/o/g, 4);
arrayEncode = arrayEncode.replace(/u/g, 5);
return arrayEncode;
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an enconding test.'));
console.log(encode('go Trybe'));
////########
function decode(arrayDecode) {
arrayDecode = arrayDecode.replace(/1/g, 'a');
arrayDecode = arrayDecode.replace(/2/g, 'e');
arrayDecode = arrayDecode.replace(/3/g, 'i');
arrayDecode = arrayDecode.replace(/4/g, 'o');
arrayDecode = arrayDecode.replace(/5/g, 'u');
return arrayDecode;  
}
console.log(decode('h3 th2r2!'))
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


