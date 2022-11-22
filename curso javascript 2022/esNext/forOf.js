for (let letra of 'cod3r') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];
for (let i in assuntosEcma) {
  console.log(i);
}

for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ['Map', { abordados: true }],
  ['Set', { abordados: true }],
  ['Promise', { abordados: true }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [cv, vl] of assuntosMap.entries()) {
  console.log(cv, vl);
}

const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
  console.log(letra);
}
