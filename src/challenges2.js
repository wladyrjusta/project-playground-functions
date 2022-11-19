// Desafio 11
const arrayPhoneId1 = [0, 1, 6];
const arrayPhoneId2 = [1, 2, 3, 4, -5, 6, 7, 8, 9, 0, 1];
const arrayPhoneId3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
const arrayPhoneId4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1];
const arrayPhoneId5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
function generatePhoneNumber(phoneId){
const countRepetition = numeros => {
let countRepeated = 0;
let countNumber = 0;
  for (let index in numeros) {
    let verifyNumber = numeros[index];
      for (let index2 in numeros) {
        if (verifyNumber === numeros[index2]) {
          countNumber += 1;
          }
        };
    if (countNumber > countRepeated) {
      countRepeated = countNumber;
      };
      countNumber = 0;
    }
    return countRepeated;  
  };

  for (let index in phoneId) {
    let phoneIdIndex = phoneId[index]; 
    if (phoneId.length != 11) {
      return `Array com tamanho incorreto.`;
    } else if (phoneIdIndex < 0 || phoneIdIndex > 9 ||    countRepetition(phoneId) >= 3) {
      return `não é possível gerar um número de telefone com esses valores`;
      }
    };
    let gerarNum = phoneId;
  gerarNum.splice(0, 0, '(');
  gerarNum.splice(3, 0, ')');
  gerarNum.splice(4, 0, ' ');
  gerarNum.splice(10, 0, '-');
  return gerarNum.join('');
  } 
console.log(generatePhoneNumber(arrayPhoneId1));
console.log(generatePhoneNumber(arrayPhoneId2));
console.log(generatePhoneNumber(arrayPhoneId3));
console.log(generatePhoneNumber(arrayPhoneId4));
console.log(generatePhoneNumber(arrayPhoneId5));
// Desafio 12
function triangleCheck() {

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
