function solution(input, markers) {
  let finalArr = [];
  let finalStr = '';
  const specials = "(" + markers.join('|') + `)`;
  const newsAndSpaces = "(\\n\s)";
  const reg = new RegExp(specials, "m");

  const strReg = new RegExp(newsAndSpaces)
  const arr = input.split(reg);
// console.log(arr)
  arr.forEach((str, i) => {
    // console.log(str[0])
    if (str[0].match(reg)) {
      arr.splice(i, 1)
      if (arr[i].includes("\n")) {
        let newlineStr = arr[i].split("\n").splice(1)
        finalArr.push("\\n" + newlineStr.join("\\n"))
      } else {
        arr.splice(i, 1)
      }
      } else {
        finalArr.push(str)
      }
    })
return finalArr.join("")
};


console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))