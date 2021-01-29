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
    const width = (height * 2) - 1
    const hashAmount = row * 2  - 1
    const underscore = width - hashAmount

 }




function xMasTree(n){
   //complete this code
   let charaters = []
   for (let i = 0; i <n; i++){
        charaters.push('#')
   }
   return charaters
}

console.log(xMasTree(2));
