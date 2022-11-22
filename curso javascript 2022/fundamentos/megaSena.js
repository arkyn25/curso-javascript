// Mega sena
function randomNumber(maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function generateNumbers() {
  let numbers = [];
  for (let i = 0; i < 6; i++) {
    numbers.push(randomNumber(60));
  }
  return numbers;
}

let megaSena = generateNumbers();
console.log(megaSena);

// LotoFacil
function sorteado(max, quant) {
  var numeroS = [];
  while (numeroS.length < quant) {
    let e = Math.ceil(Math.random() * max);
    if (numeroS.indexOf(e) == -1) {
      numeroS.push(e);
    }
  }
  return numeroS;
}
console.log(sorteado(25, 15));
