// 1. Criação da variável para armazenar o array de notas
let notas = [7.5, 8.0, 6.5, 9.0];

// 2. Criação da função para calcular a média das notas
function calcularMedia(notasArray) {
    let soma = 0;
    
    for (let i = 0; i < notasArray.length; i++) {
        soma += notasArray[i];
    }

    let media = soma / notasArray.length;
    return media;
}

// 3. Chamando a função e exibindo o resultado
let media = calcularMedia(notas);
console.log("A média das notas é: " + media);
