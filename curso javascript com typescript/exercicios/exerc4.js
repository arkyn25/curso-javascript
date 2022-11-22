function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo',
    {
    enumerable: true,
    get: function() {
      return cpfEnviado.replace(/[^\d]+/g, '');
    }
  });
}
ValidaCPF.prototype.validaDigito = function() {
  if (typeof this.cpfLimpo === 'undefined') {
    return false;
  }
  if (this.cpfLimpo.length !== 11) {
    return false;
  }
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  const novoCpf = cpfParcial + digito1 + digito2;
  return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  let cpfArray = Array.from(cpfParcial)
  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((acumulador, valor) => {
    acumulador += (regressivo * Number(valor));
    regressivo--;
    return acumulador;
  }
  , 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
}
ValidaCPF.prototype.isSequencia = function() {
  let sequencia = /^(\d)\1{10}$/;
  return sequencia.test(this.cpfLimpo);
}


let cpf = new ValidaCPF('118.870.896-16');

if (cpf.validaDigito()) {
  console.log('CPF Válido');
} else {
  console.log('CPF Inválido');
}