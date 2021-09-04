function toUnderscore(string) {
// check if the string is number, if so, return as a string
//use regular expression to match pattern and replace  
//for every capital letter replace with lowercase
// if letter is not the first letter, splice in a hypen before the letter  
//return the string
  if (typeof string !== 'string') {
    return string.toString()
  }
  let arr = string.split(/([A-Z])/).splice(1)
  return arr.map(word => (/^[A-Z]/.test(word) ? "-" + word : word))
  .join('').toLowerCase().slice(1)
  // let newArr = arr.map(word => {
  //   if (/^[A-Z]/.test(word)) {
  //     return "-"+ word
  //   } else {
  //     return word
  //   }
  // })
 


}

console.log(toUnderscore("ThisIsAwesomeMan"))
// console.log(typeof 1)

// Complete the function/method so that it takes a PascalCase string and returns the string
// in snake_case notation. Lowercase characters can be numbers. 
// If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"