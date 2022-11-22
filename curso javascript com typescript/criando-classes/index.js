class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    return `${this.nome} está falando`;
  }
  comer() {
    return `${this.nome} está comendo`;
  }
  beber() {
    return `${this.nome} está bebendo`;
  }
}

const p1 = new Pessoa('Arlen', 'Freitas');
const p2 = new Pessoa('João', 'Silva');

console.log(p1.falar());
console.log(p2);