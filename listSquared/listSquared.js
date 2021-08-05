
// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
function listSquared(m, n) {
  let divisors = []
  let integers = []
  let finalArray = []
  for (let i = m; i <= n; i += 1) {
    integers.push(i)
  }
  integers.forEach(int => {
    let mod = int
    let intDivisors = [];
    while (mod > 0) {
      if (int % mod === 0) {
        intDivisors.push(mod)
      }
      mod--
    }
    divisors.push(intDivisors)
  })
  divisors.forEach(divArr => {
    // let numSquared = (divArr[0] ** 2)
    let divSquared = divArr.reduce((s, d) => { return s += d ** 2 }, 0)
    if (Math.sqrt(divSquared) % 1 === 0) {
      finalArray.push([divArr[0], divSquared])
    }
  })
  return finalArray
}

console.log(listSquared(42, 250))