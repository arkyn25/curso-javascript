// Heranca;

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  Object.defineProperty(this, 'estoque', {
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto ('Camiseta', 50);
const camiseta = new Camiseta('Camiseta', 50, 'Azul');
const caneca = new Caneca('Caneca', 10, 'plastico', 10);
caneca.estoque = 20;
console.log(caneca.estoque);
camiseta.desconto(50);
console.log(produto);
console.log(camiseta);