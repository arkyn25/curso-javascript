// Hoisting is a JavaScript feature that allows you to declare variables and functions before you use them.
function teste() {
  console.log('a = ', a)
  var a = 2
  console.log('a = ', a)
}
teste()