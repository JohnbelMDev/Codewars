// taking an array as my parameter
// reverse the strings in the array
// example
    //['A','B','C']
    //return
         //['C','B',A]



function fixTheMeerkat(arr) {
 //your code here

  let reverseString = []
  for (var i = arr.length -1; i >= 0; i-- ){
    reverseString.push(arr[i])
  }
  return reverseString
}

console.log(fixTheMeerkat(['A','B','C']));
