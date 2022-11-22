function criarHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


let segundos = 0;
let timer;

function iniciarTimer() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criarHoraSegundos(segundos);
    }, 1000);  
}

iniciar.addEventListener('click', function(event) { 
    iniciarTimer();
});

pausar.addEventListener('click', function(event) {
    relogio.style.color = '#ff0000';
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
    relogio.style.color = '#000000';
});

