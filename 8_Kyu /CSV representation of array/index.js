// create a function that takes in a array
// return the indexes of the array with comma separated values
// example
   //[0,1,2,3,45]
   //[ 10,11,12,13,14 ]

function toCsvText(array) {
   // good luck
   let splitarray = array.join("\n")
   return splitarray


}

console.log(toCsvText( [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] ));
