function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) =>{
    if (typeof msg !== 'string') reject('bad value');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Olá 1", aleatorio(1, 3))
.then(msg => { console.log(msg)
  return esperaAi('ola 2', aleatorio(1, 3));
}).then(msg => {
  console.log(msg);
  return esperaAi('ola 3', aleatorio(1, 3));
}).then(msg => {
  console.log(msg);
})
.catch(err => console.log(err));