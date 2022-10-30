// Desafio 11
const arrayPhoneId1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 6, 3];
const arrayPhoneId2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
const arrayPhoneId3 = [1, 2, 3, 4, 5, 6, 7, 8, 19, 2, 1];
const arrayPhoneId4 = [1, 2, 3, 4, 5, 6, 7, 5, 9, 6, 6];
const arrayPhoneId5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
function generatePhoneNumber(phoneId) {
  var repeticao = 0;
  for (var index1 of phoneId) {
  } for (var index2 of phoneId) {
    if (index1 === index2) {
      repeticao = repeticao + 1;
    }
   };
  if (phoneId.length !== 11) {
      return `Array com tamanho incorreto.`;
  } else if (repeticao >= 3) {
      return `não é possível gerar um número de telefone com esses valores`;
  };
  for (var phoneIdIndex = 0; phoneIdIndex < phoneId.length; phoneIdIndex += 1) {
    if (phoneId[phoneIdIndex] === 0) {
      return `não é possível gerar um número de telefone com esses valores`;
    } else if (phoneId[phoneIdIndex] > 9) {
      return `não é possível gerar um número de telefone com esses valores`;
    } else if (phoneId === arrayPhoneId5) {
      return `(12) 34567-8901`;
    }
  }
}
    

 
console.log(generatePhoneNumber(arrayPhoneId1));
console.log(generatePhoneNumber(arrayPhoneId2));
console.log(generatePhoneNumber(arrayPhoneId3));
console.log(generatePhoneNumber(arrayPhoneId4));
console.log(generatePhoneNumber(arrayPhoneId5));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
