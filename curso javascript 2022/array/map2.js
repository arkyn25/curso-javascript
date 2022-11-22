const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];

let result = carrinho
  .map((preco) => JSON.parse(preco))
  .map((preco) => Object.values(preco)[1]);

console.log(result);
