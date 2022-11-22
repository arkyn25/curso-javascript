function Pessoa() {
  this.idade = 0;

  const self = this; // Outra forma de fazer o bind no setInterval
  setInterval(
    function () {
      self.idade++;
      console.log(self.idade);
    } /*.bind(self)*/, // Fazer o bind do this.
    1000
  );
}

new Pessoa();
