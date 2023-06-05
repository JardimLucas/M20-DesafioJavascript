function somaMultiplos() {
  let soma = 0;  // Definindo a Variável soma

  for (let numero = 1; numero < 1000; numero++) { //Enquanto o número for menor que 1000 o loop continua
    if (numero % 5 === 0 || numero % 7 === 0) {
      soma += numero; //Se a variável número for divisível por 5 ou 7, soma-se esse número.
    }
  }

  return soma;
}

console.log("Soma dos múltiplos:", somaMultiplos()); // Exibe a soma dos múltiplos de 5 ou 7 abaixo de 1000
