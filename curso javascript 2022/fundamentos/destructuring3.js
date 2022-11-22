function rand({ min = 0, max = 1000 }) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(rand({min: 500}));
console.log(rand({}));
console.log(rand({min: 0, max: 1000}));

