const produtos = [
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'Ipad pro', preco: 10000, fragil: true },
  { nome: 'copo de vidro', preco: 12.49, fragil: true },
  { nome: 'copo de plastico', preco: 18.99, fragil: false },
];
console.log(
  produtos.filter((p) => {
    return p.preco > 10 && p.fragil;
  })
);
