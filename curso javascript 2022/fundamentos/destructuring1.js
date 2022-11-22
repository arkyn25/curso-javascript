// Destructuring assignment objects
const pessoa = {
  nome: 'João',
  idade: 20,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123,
    bairro: 'Centro',
    cidade: 'São Paulo',
    uf: 'SP'
  }
}

const { nome, idade } = pessoa
console.log(nome, idade);

const { endereco: { logradouro, bairro } } = pessoa;
console.log(logradouro, bairro);