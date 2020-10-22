// I'll be taking a parameter of an array of intengers
// I'll be returning a sum of numbers excluding the largest and smallese
// example of array
 //  arr =[2,3,4,8]
 // psedocode
 // first sort the array
 // remove smalles inside my array
// remove the largest inside my array
//  let arr = [5,12,34,10,4,8]
// arr.sort();
// // [ 10, 4, 5, 8 ]
// //  arr.shift();
// // arr.shift();
//
// console.log(arr);
//


// implementing the comparing function

function comparing(a, b) {
  console.log("now comparing",a,b);
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function test(arr){
   // arr = [  arr = [ 12,4,1 ]; ];
   // first sort the number from lowest to highest
  arr.sort(comparing);
  // then use the shift method to take out the first index
  arr.shift();
  // reverse the value inside the array from biggest to highest
  // arr.reverse();

  // then take out the first index of the array
  // arr.shift();
  // removing the last element inside the array
  arr.pop();
  console.log(arr);
  // using the reduce function to adds up the rest of the element inside the array
  let result = arr.reduce((sum, current) => sum + current);
  return result;
}
