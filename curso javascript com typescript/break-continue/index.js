const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
    if (numero === 5) {
        continue;
    }
  console.log(numero);
}
console.log('Fim!');
for (let numero of numeros) {
  if (numero === 5) {
      break;
  }
console.log(numero);
}