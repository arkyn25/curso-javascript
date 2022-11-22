const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // massa quebrou o carro! Pop remove ultimo elemento
console.log(pilotos);

pilotos.push('Verstappen'); // push adiciona no ultimo elemento
console.log(pilotos);

pilotos.shift(); // remove o primeiro!
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona no primeiro elemento
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // retorna novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
