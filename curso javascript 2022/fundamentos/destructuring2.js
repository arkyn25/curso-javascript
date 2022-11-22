// Destructuring assignment arrays
const [a] = [10];
console.log(a);

const [nome, idade] = ['João', 20];
console.log(nome, idade);

const [, [, , terceiro]] = [['a', 'b', 'c'], ['d', 'e', 'f']];
console.log(terceiro);