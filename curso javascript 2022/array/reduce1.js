const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];
const resultado = alunos
  .map((a) => a.nota)
  .reduce((acc, curr) => {
    console.log(acc, curr);
    return acc + curr;
  });

console.log(resultado);

let value = 2568;

let sum = value
  .toString()
  .split('')
  .map(Number)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(sum);
