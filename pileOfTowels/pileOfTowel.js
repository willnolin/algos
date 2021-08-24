function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // loop through each weeklyUsed Towel
  // start loop to pop off towels
  // let basket container to hold dirty towels
  // find the number of towels at first index weeklyUsedTowels[]
  // pop off that many towels from pileOfTowels
  // sort dirty towels in descending order and push onto basket
  // spread basket towels onto pileofTowels
  // end loop to pop of towels
  // end loop through each weeklyUsed Towel
  // return pile of towels
  for (let i = 0; i < weeklyUsedTowels.length; i++) { 
  let basket = [];
    for (let j = 0; j < weeklyUsedTowels[i]; j++) {
      basket.push(pileOfTowels.pop()) 
    }
   basket.sort().reverse();
    pileOfTowels = [...pileOfTowels, ...basket]
  }
  return pileOfTowels;
}

console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [2, 1, 4, 2]))

// describe("Sample tests", () => {
//   it("Example #1", () => {
//     const pileOfTowels = ["blue", "red", "blue", "red", "blue"];
//     const weeklyUsedTowels = [3];
//     const expected = ["blue", "red", "red", "blue", "blue"];
//     assert.deepEqual(sortThePile(pileOfTowels, weeklyUsedTowels), expected);
//   });
  
//   it("Example #2", () => {
//     const pileOfTowels = ["blue", "red", "blue", "red", "blue"];
//     const weeklyUsedTowels = [2, 1, 4, 2];
//     const expected = ["blue", "red", "red", "blue", "blue"];
//     assert.deepEqual(sortThePile(pileOfTowels, weeklyUsedTowels), expected);
//   });
// });
