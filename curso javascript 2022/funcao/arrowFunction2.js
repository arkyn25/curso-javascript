function Pessoa() {
  this.idade = 0;
  // Arrow Function
  setInterval(
    () => {
      this.idade++;
      console.log(this.idade);
    } /*.bind(self)*/, // Fazer o bind do this.
    1000
  );
}

new Pessoa();
