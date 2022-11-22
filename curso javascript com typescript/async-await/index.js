function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("bad value");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

async function executa() {
  try {
    const frase1 = await esperaAi("Fase1", random());
    console.log(frase1);

    const fras2 = await esperaAi("Fase2", random());
    console.log(fras2);

    const frase3 = await esperaAi("Fase3", random());
    console.log(frase3);
  } catch (error) {
    console.log(error);
  }
}

executa();
