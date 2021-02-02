// I will be taking an array of numbers
// return the smallest pair added
// example [1,2,1] 1 + 1 = 2 because both of those are the smallest pair

// sort the array
// add the 0 index with index 1

function smallestPairSum (numbers){
  let arr = numbers.sort((a,b) => a - b)
  let sum = arr[0] + arr[1]
  return sum

}

console.log(smallestPairSum([-100,-29,-24,-19,19]));
