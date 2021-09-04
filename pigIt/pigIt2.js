function pigIt2(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3")
}

console.log(pigIt2('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt2('Hello o world !'));