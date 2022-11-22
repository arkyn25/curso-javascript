import ValidaCPF from "./ValidaCPF";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min + 1) + min));
  }

  formatado(cpf) {
    return (
      cpf.substr(0, 3) +
      "." +
      cpf.substr(3, 3) +
      "." +
      cpf.substr(6, 3) +
      "-" +
      cpf.substr(9, 2)
    );
  }
  geraNovoCpf() {
    const cpfSemDigito = this.rand();
    const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
    const novoCpf = cpfSemDigito + digito1 + digito2;
    return this.formatado(novoCpf);
  }
}
