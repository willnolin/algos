var peakHeight = function (mountain) {
  // for each row there is a 
  // mountain.forEach(row => {
  // if x = 2   then [x][y], [x-1][y], [x][y-1], 0, [x+1][y]
  // if y = 2, then  [x][y], [x-1][y], [x][y-1], [x+1][y]
  // if y = 0, then  [x][y], [x-1][y], [x][y+1], [x+1][y]
  // if x = 0, then  [x][y], [x][y-1], [x][y+1], [x+1][y] 
  // })
  // if value is in the top row and it isn;t a blank space, 

  // recursivelt run mountain through function
  // 

  // for (let x = 0; x < mountain.length; x++) {
  //   for (let y = 0; y < mountain[x].length; y++) {
  //     if ( /\s/g.test(mountain[x][y]) === true) {
  //       mountain[x][y] = "";
  //     } else {
  //       mountain[x][y] = 1;
  //     }
  //   }
  // }
  for (let x = 0; x < mountain.length; x++) {
    for (let y = 0; y < mountain[x].length; y++) {
      let counter = 0
      // if (x !== 0 && y !== 0) {
       
        // if (mountain[x - 1] !== undefined
        //   && mountain[x + 1] !== undefined
        //   && mountain[y - 1] !== undefined
        //   && mountain[y + 1] !== undefined) {
        if (mountain[x - 1] !== undefined) {
          if (mountain[x - 1][y] === ' ') {
            counter++;
          }
        }
      if (mountain[y - 1] !== undefined) {
          // console.log(Boolean(mountain[x][y - 1]))
          if (mountain[x][y - 1] === ' ') {
            counter++;
          }
        }
          if (mountain[x + 1] !== undefined) {
            if (mountain[x + 1][y] === ' ') {
              counter++;
            }
          }
        if (mountain[y + 1] !== undefined) {
          if (mountain[x][y + 1] === ' ') {
            counter++;
          }
        }
        if (counter > 1 && counter < 4) {
          mountain[x][y] = ' ';
        }
        console.log(counter)
      }
        // }
      // }
    }
    console.table(mountain)
    // return 1;
  }



  var mountain = [
    "^^^^^^        ".split(''),
    " ^^^^^^^^     ".split(''),
    "  ^^^^^^^     ".split(''),
    "  ^^^^^       ".split(''),
    "  ^^^^^^^^^^^ ".split(''),
    "  ^^^^^^      ".split(''),
    "  ^^^^        ".split('')
  ];
  console.log(peakHeight(mountain));
