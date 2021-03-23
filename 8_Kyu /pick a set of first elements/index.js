// taking an array of numbers and n will be the number of indexes to return
// return n index of array


//example
   // ['c','d','g'] ,2 => ['c','d']
   // ['a','e','o'], arr ['a']

   //create a for loop
       //start at index where i = n
         //return arr[i]


function first(arr, n) {
  let index = []
     if( n == null)
     {
       index.push(arr[0])
       return index
     }
   for (var i = 0; i < n; i++) {
     if(typeof arr[i] !== 'undefined'){
        index.push(arr[i])
     }
   }
   return index
}


console.log(first(['a', 'b', 'c', 'd', 'e'],3));
// console.log(first( ['c']));
