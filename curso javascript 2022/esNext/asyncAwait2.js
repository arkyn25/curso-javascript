function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const aleatorio = parseInt(
        Math.floor(Math.random() * (max - min + 1) + min)
      );
      if (numerosProibidos.includes(aleatorio)) {
        reject('Numero Repetido');
      } else {
        resolve(aleatorio);
      }
    });
  });
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }

    return numeros;
  } catch (e) {
    if (tentativas > 5) {
      throw 'Error';
    } else {
      return gerarMegaSena(qtdNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(6).then(console.log).catch(console.log);
