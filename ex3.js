// Função para imprimir os nomes dos alunos usando forEach e document.write
function imprimirNomes(alunos) {
  alunos.forEach(function(nome) {
      document.write(nome + "<br>");
  });
}

// Array de exemplo com alguns nomes de alunos
let alunos = ["Ana", "Bruno", "Carlos", "Daniela"];
imprimirNomes(alunos);
