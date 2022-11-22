
 const soma = (a, b) => {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Os valores precisam ser números');
      }
      return a + b;
    } catch (e) {
      console.log(e);
    }
 };

console.log(soma(2, 3));
console.log(soma('1', 3));

