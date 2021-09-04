function vaporcode(string) {
  let newStr = string.split(" ").join("")
  return newStr.toUpperCase().split("").join("  ")
}
  

console.log(vaporcode("lets go to the movies"));