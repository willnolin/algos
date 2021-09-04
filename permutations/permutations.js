function permutations(string) {
  let results = []
  if (string.length === 1) {
    results.push(string)
    return results
  }

  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i];
    let charsLeft = string.substring(0, i) + string.substring(i + 1);
    let currPermutations = permutations(charsLeft)
    for (let j = 0; j < currPermutations.length; j++) {
      results.push(firstChar + currPermutations[j])
    }
  }
  return [...new Set(results)];
}
 
console.log(permutations('abcd'))
//'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

 //split string into array, store in variable strArr
//  // number of letters is the strArr length
//  // for each character in the string
//    // swap for every other character in the string
//    // store each new string in an array
//    // create a new Set from this array
//    //return the set
   
//   const strArr = string.split('')
//   const permArr = []
//    if (strArr.length === 1) {
//      return strArr
//    }
//   for (let i = 0; i < strArr.length; i++) {
//     let tempArr = [...strArr]
//     let currChar = tempArr.splice(i, 1)
//     for (let j = 0; j < tempArr.length; j++) {
//       let tempCombo = [...tempArr] 
//       console.log(tempCombo)
//        let temp = tempCombo[i]
//        tempCombo[i] =tempCombo[j]
//        tempCombo[j] = temp
//        permArr.push(currChar + tempCombo.join(''))
//       //  tempArr.splice(i, 0, currChar)
//       //  permArr.push(tempArr.reverse().join(''))
//      }
//   }
//   // console.log(permArr.sort())
//   return [...new Set(permArr)]