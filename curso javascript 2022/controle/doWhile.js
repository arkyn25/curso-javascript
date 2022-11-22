// Do while
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.floor(Math.random() * (max - min) + min);
  return valor;
}

let opcao = 0;

do {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opcao escolhida foi ${opcao}`);
} while (opcao != -1);
