// Move the first letter of each word to the end of it, 
// then add “ay” to the end of the word.
// Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) {
// split string into array
// for each word, split into character array
  // if word ends with a special character, make second to last index last index 
  //swap first and last index
// splice in A Y at last index
  // join word together
  // pish back onto word array
  //end foreach
  // join together at spaces
  //return
  let words = []
  let lastIndex = 0;
  let spec = ''
  let temp;
  str.split(" ").forEach(word => {
 
      let charArray = word.split('')
      // console.log(charArray)
      temp = charArray.splice(0, 1)
    if (charArray.length) {
      if (/\W$/g.test(word)) {
        lastIndex = charArray.length - 1
        // spec = charArray.pop()
      } else {
        lastIndex = charArray.length
      }
      charArray.splice(lastIndex, 0, temp)
      // charArray.splice(charArray.length, 0, 'ay')
      words.push(charArray.join('') + 'ay')
    } else {
      if (/\W$/g.test(temp)) {
        words.push(temp)
      } else {
        words.push(temp + 'ay')
      }
    }
  })
  return words.join(' ')
  
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello o world !'));     // elloHay orldway !