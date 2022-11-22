function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

// esperarPor(2000).then(esperarPor).then(esperarPor);

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();

  await esperarPor(2000);
  console.log(`Async/Await ${valor}...`);

  await esperarPor(2000);
  console.log(`Async/Await ${valor + 1}...`);

  await esperarPor(2000);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

async function executarDeVerdade() {
  await executar();
}

executarDeVerdade();
