// taking an array as my parameter 
//returning arr1 with the first element from the second array


function elShuffle(arr1,arr2){
    arr1[2] = arr2[1]
   return arr1
}

console.log(elShuffle([4,2,7,5],[2,3]));