var numberToPrice = function(number) { // more reliable than isNaN
  if (typeof number !== 'number') {
    return 'NaN'
  } else {
    let with2Decimals;
    (number % 1 === 0) ?
      with2Decimals = number.toFixed(2).toString() :
      with2Decimals = number.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    let numArr = with2Decimals.toString().split(".")
      let intArr = [...numArr[0]].reverse();
      let newArr = [];
    intArr.forEach((char, i) => i !== 0 && i % 3 === 0 && char !== "-"?
      newArr.push(",", char) :
      newArr.push(char))
    return numArr[1].length < 2 ?
      (`${newArr.reverse().join("")}.${numArr[1]}0`) :
      (`${newArr.reverse().join("")}.${numArr[1]}`)
    }
}

console.log(numberToPrice(-20046000.67455))
