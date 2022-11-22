Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
const produtos = [
  { nome: 'notebook', preco: 2499, fragil: true },
  { nome: 'Ipad pro', preco: 10000, fragil: true },
  { nome: 'copo de vidro', preco: 12.49, fragil: true },
  { nome: 'copo de plastico', preco: 18.99, fragil: false },
];
console.log(
  produtos.filter2((p) => {
    return p.preco > 10 && p.fragil;
  })
);
