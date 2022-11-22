const paragrafos = document.querySelectorAll('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosbody = getComputedStyle(document.body);
const backgroundColorBody = estilosbody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}