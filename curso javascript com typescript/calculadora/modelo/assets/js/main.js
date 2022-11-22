function criaCalculadora() {
  return {
    display: document.querySelector('.display'),
  
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keypress', (e) => {
        if (e.keyCode == 13) {
          this.calcula();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    del() {
      this.display.value = this.display.value.slice(0, -1);
    },

    calcula() {
      let conta = this.display.value;
      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta Invalida');
          return;
        }

        this.display.value = String(conta);
      } catch (error) {
        alert('conta invalida');
        return;
      }
    },

    cliqueBotoes() {
      document.addEventListener('click', (event) => {
        const elemento = event.target;
        if (elemento.classList.contains('btn-num')) {
            this.numeroPressionado(elemento.innerText);
        }
        if (elemento.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (elemento.classList.contains('btn-del')) {
          this.del();
        }

        if (elemento.classList.contains('btn-equal')) {
          this.calcula();
        }
      });
    },
    numeroPressionado(numero) {
      this.display.value += numero;
    }
  }
}
const calculadora = criaCalculadora();
calculadora.inicia();