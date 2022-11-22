// ES8 Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notacao Literall
const nome = 'Carla';
const pessoa = {
  nome,
  ola() {
    return `Diga ola ${nome}`;
  },
};

console.log(pessoa.ola());

// Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'au au';
  }
}

console.log(new Cachorro().falar());
