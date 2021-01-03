function mergeArrays(arr1, arr2) {

 let merge = arr1.concat(arr2)
 let set = [...new Set(merge)]
 return set.sort((a,b) => a - b)


}

console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));
