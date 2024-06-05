// Função que recebe um array de números e retorna o maior número
function encontrarMaiorNumero(numeros) {
  let maiorNumero = numeros[0];  // Inicializa a variável com o primeiro elemento do array
  
  for (let i = 1; i < numeros.length; i++) {  // Começa a partir do segundo elemento
      if (numeros[i] > maiorNumero) {  // Verifica se o elemento atual é maior que o maiorNumero
          maiorNumero = numeros[i];  // Atualiza o maiorNumero
      }
  }
  
  return maiorNumero;  // Retorna o maior número encontrado
}

// Testando a função com um array de exemplo
let numeros = [3, 5, 7, 2, 8, 6, 4, 10, 1];
let maior = encontrarMaiorNumero(numeros);
console.log("O maior número é: " + maior);

