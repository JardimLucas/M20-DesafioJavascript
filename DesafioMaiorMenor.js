// Encontrar o maior valor
const array = [50, 20, 8, 15, -30, 33, 58, 158];

// Encontrando o maior valor
let maiorValor = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > maiorValor) {
    maiorValor = array[i];
  }
}

// Encontrando o menor valor
let menorValor = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] < menorValor) {
    menorValor = array[i];
  }
}
//Monstrando o resultado.
console.log(`O maior valor do array é: ${maiorValor}`);
console.log(`O menor valor do array é:  ${menorValor}`);

