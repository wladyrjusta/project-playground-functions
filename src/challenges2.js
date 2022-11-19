// Desafio 11
const arrayPhoneId1 = [0, 1, 6];
const arrayPhoneId2 = [1, 2, 3, 4, -5, 6, 7, 8, 9, 0, 1];
const arrayPhoneId3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const arrayPhoneId4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 1];
const arrayPhoneId5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(phoneId) {
let countNumber = 0;
 for (let num of phoneId) {
  for (let index in phoneId) {
    if(num === phoneId[index]) {
    countNumber += 1;
   }
  }
 }
 return countNumber; 
};
//console.log(generatePhoneNumber(arrayPhoneId1));
//console.log(generatePhoneNumber(arrayPhoneId2));
//console.log(generatePhoneNumber(arrayPhoneId3));
//console.log(generatePhoneNumber(arrayPhoneId4));
console.log(generatePhoneNumber(arrayPhoneId5));
// Desafio 12
function triangleCheck(lineA, lineB, LineC) {
  if (lineA > (lineB + LineC) || lineB > (lineA + LineC) || LineC > (lineA + lineB)) {
    return false;
  } else if(lineA < Math.abs(lineB - LineC) || lineB < Math.abs(lineA - LineC) || LineC < Math.abs(lineA - LineC)) {
    return false;
  } else {
    return true;
  };
};
console.log(triangleCheck(100, 14, 8));
console.log(triangleCheck(1, 14, 8));
console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};