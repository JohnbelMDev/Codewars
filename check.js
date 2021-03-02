function frequency(array,limit) {
  let object = {}
  let num
  let deleteOccurence = []
  for (var i = 0; i < array.length; i++) {
    num = array[i]
    // console.log('hello',object[num]);
  //object  series of unique key valued pair
    if(object[num])
      {
        object[num]++;

      }

      // have my first array
      //create a new array that will only keep track of the values that I need
    else
    {
      object[num] = 1;
    }

    if(object[num] <= limit){
       deleteOccurence.push(num)
    }

  }
  // console.log(object);
  return deleteOccurence
}

// keeping track of the count
//
console.log(frequency([1,1,1,2,3,4,1],2));


// 





// function frequency(array){
//   let object = {}
//   let count = 0
//   let num
//   let temp = []
//    for (var i = 0; i < array.length; i++) {
//      num = array[i]
//      object[num] = count++
//     if(typeof(object[num])!= "undefined") {
//       object[num]++;
//     console.log('test',object);
//     }
//     else {
//       object[num] = 1;
//       console.log('hello',object);
//     }
//    }


// }
// console.log(frequency([1,2,3,5]));
