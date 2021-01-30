// Taking a number as my parameter which we will say is the height
// returning charaters as the tree
// XMasTree(5) should return : ['____#____', '___###___', '__#####__', '_#######_', '#########', '____#____', '____#____']

// ____#____              1
// ___###___              2
// __#####__              3
// _#######_              4
// #########       -----> 5 - Height of Tree
// ____#____        1
// ____#____


// total is width is 9
// 1 hash
// 8 each side

// 3 ---->
// 6
// total width is 9
  // w =9;
  // 6 underscor
  // 3

  //  total - hash = underscor
  //   9 - 3 = 6
// n is the size of the tree
// which row of the tree to draw
// n could be one input and that input would be the size


// spreadsheet
  // n represent the size
  // row represent the amount of row there is in the tree
  // amount of hash represent the amount of hash in each rows
  // underscore represent amount of underscore there is each side and they are even
  // the total width is 9 which always remains the same
  // the left underscrore represent the amout which is the same as the right side




// XMasTree(3) will result in:
// __#__                  1
// _###_                  2
// #####          ----->  3 - Height of Tree
// __#__           1
// __#__           2 - Trunk/Stem of Tree


// XMasTree(4) will result in
// ---#---

// total width is 5  when n is 3
// tottal width is 7 when is 4
// total width is 9 when n is 5
// total width is 11 when n 6

//  w = n * 2 - 1 // <- formula is

 function xMasTreeRow(height, row){
   // console.log(height,row);
   // width represent each side
   if (height < row){
     return 'Error'
   }
    const width = (height * 2) - 1

    // hasmount for each sides
    const hashAmount = row * 2  - 1
    // underscore represent for each sides

    // // __#####__              3
    const underscore = width - hashAmount

    const divideTotalSide = underscore / 2

    const hastCharacter = '#'.repeat(hashAmount)
    const underScorecharater = '_'.repeat(divideTotalSide)
    const conCatAll = underScorecharater + hastCharacter + underScorecharater
    return conCatAll


 }
// console.log(xMasTreeRow(5,5));



function xMasTree(n){
   //complete this code
   let charaters = [];
   let first;
   let answer;
   for (let i = 1; i <= n; i++){

        charaters.push(xMasTreeRow(n,i))

   }
   first = xMasTreeRow(n,1)
   // answer = [first,first]
   charaters.push(first,first)
   return charaters
}

console.log(xMasTree(5));
