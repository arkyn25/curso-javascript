// Funcao factory que retorna um objeto
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto('tv', 55, 20));
