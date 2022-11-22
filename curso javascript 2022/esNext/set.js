// nao aceita repeticao/nao indexada
const times = new Set();
times.add('vasco');
times.add('Sao paulo').add('Palmeiras').add('Corintias');
times.add('Flamengo');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);
