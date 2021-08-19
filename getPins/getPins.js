function getPINs(observed) {
  // create an array of possible numbers
   // possibles = [[1,2,3],[4,5,6],[7,8,9],[0]]
   //for each number in observed,
   // crete array of empty arrays
   // for each digit, find in poissbles
   //  [0][0], [0][1], [0][2],
  //   [1][0], [1][1], [1][2],
  //   [2][0], [2][1], [2][2]    5 = [1][1], [0][1], [1][0], [1][2], [2][1]  =  [x][y], [x-1][y], [x][y-1], [x][y+1], [x+1][y]
                            //  1  =  [0][0], [1][0], [0][1] = [x][y], [x+1][y], [x][y+1]
  //  if its 0, the other possibility is 8
  // if i = 0 or 2 AND j = 0 or 2, then we're at a corner, (only two other possibilities)  
  // if x = 1 or y = 1 AND x - y != 0  
  //      if x = 2   then [x][y], [x-1][y], [x][y-1], 0, [x+1][y]
          // if y = 2, then  [x][y], [x-1][y], [x][y-1], [x+1][y]
          // if y = 0, then  [x][y], [x-1][y], [x][y+1], [x+1][y]
          // if x = 0, then  [x][y], [x][y-1], [x][y+1], [x+1][y]
  const possibles = [[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]]]
  const numPad = [[1,2,3], [4,5,6], [7,8,9]]
  // console.log(possibles[0][0][1])
  console.log(numPad[0][1])
  console.log()
}
 
getPINs(9)