// Superclass  
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if (valor >this.saldo ) {
    console.log(`Saldo insuficiente! ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo()
}
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
}
Conta.prototype.verSaldo = function() {
  console.log(`Ag.: ${this.agencia} Conta: ${this.conta} Saldo: R$${this.saldo.toFixed(2)}`);
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

Conta.prototype.sacar = function(valor) {
  if (valor >(this.saldo + this.limite) ) {
    console.log(`Saldo insuficiente! ${this.saldo}`);
    return;
  }
  this.saldo -= valor;
  this.verSaldo()
}

const conta = new Conta(123, 456, 1000, 100);
conta.depositar(500);
conta.sacar(1600);