// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.
// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }
// Example 2
// input = {
//   "1": ["A"],
//   "2": ["A"],
//   "3": ["A"],
// }

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }
// Example 3
// input = {
//   "432": ["A", "A", "B", "D"],
//   "53": ["L", "G", "B", "C"],
//   "236": ["L", "A", "X", "G", "H", "X"],
//   "11": ["P", "R", "S", "D"],
// }

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }

const removeDuplicateIds = (obj) => {
  //sort keys into numerical order
  //compare and remove duplicates in every array (using loop)
  //compare each array
// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
  let valsArray = Object.entries(obj);
  let finalObj = {};
  let uniqueArr = valsArray.map(([key, value]) => [key, [...new Set(value)]]);

  let holderArray = [...uniqueArr[uniqueArr.length - 1][1]];
  // console.log(holderArray)
  for (let i = uniqueArr.length - 2; i >= 0; i--) {
    console.log("unique Array in first loop: ", uniqueArr)
    let tempArr = [...uniqueArr[i][1]];
    
    for (let j = 0; j < uniqueArr[i][1].length; j++) {
      // console.log(tempArr)
      console.log(uniqueArr[i][1][j])
      console.log(holderArray.includes(uniqueArr[i][1][j]))
      if (holderArray.includes(uniqueArr[i][1][j])) {
        tempArr.splice(j, 1, "");
        console.log("tempArray:" , tempArr)
      }
      console.log("uniqueArr inside inner loop: ", uniqueArr)
    }
 
    uniqueArr[i][1] = tempArr.filter(el => el !== "");
    holderArray.push(...tempArr);
    console.log("holde Array:", holderArray)
    console.log("unique array outside innier loop:", uniqueArr)
  }
  for (const key of uniqueArr) {
    finalObj[key[0]] = key[1];
  }
  return finalObj;
};

console.log(removeDuplicateIds({
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}))
