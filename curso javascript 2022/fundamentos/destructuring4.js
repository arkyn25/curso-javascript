// destruturacao de arrays
function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
console.log(rand([500]));
console.log(rand([50, 40]));
console.log(rand([]));