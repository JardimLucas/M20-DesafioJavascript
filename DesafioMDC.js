function MDC(n1, n2) {
  // Verifica se o segundo número é igual a zero, indicando que encontramos o MDC
  if (n2 === 0) {
    return n1;
  }  

  // Caso contrário, chamamos a função com os parâmetros invertidos
  // e o resto da divisão de n1 por n2 como novo n2
  return MDC(n2, n1 % n2);
}

// Chamada da função MDC com os valores
const mdc = MDC(210, 40);

// Imprime o resultado do MDC
console.log("MDC:", mdc);


