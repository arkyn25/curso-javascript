// While
function getInteiroAleatorioEntre(min, max) {
  const valor = Math.floor(Math.random() * (max - min) + min);
  return valor;
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opcao escolhida foi ${opcao}`);
}
