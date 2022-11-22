// If else
function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com ' + nota);
  } else {
    console.log('Reprovado com ' + nota);
  }
}

soBoaNoticia(8);
soBoaNoticia(4);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdade... ' + valor);
  }
}

seForVerdadeEuFalo('');
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
seForVerdadeEuFalo({ nome: 'Sr. Vitor' });
seForVerdadeEuFalo(function() {});
seForVerdadeEuFalo(true);
seForVerdadeEuFalo(false);
seForVerdadeEuFalo(new Date());