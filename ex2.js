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

// 3. Função para verificar a média e escrever a mensagem apropriada
function verificarMedia(media) {
    if (media > 7) {
        console.log("Parabéns você passou na média!");
    } else {
        console.log("Infelizmente você está de recuperação.");
    }
}

// 4. Calculando a média e verificando a média
let media = calcularMedia(notas);
verificarMedia(media);



