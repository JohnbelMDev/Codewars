// taking an array as my parameter
// return the average as a whole number
// example
   // [4,2,5]  => add all then divide by the length
   // which will give 3.6666
   // but we want 4 insted

   // use reduce to add all num in array then divide by the length
   // 4 + 2 + 5 = 11
   // divide by the length of the array which is 3

function average(scores) {
    // code to calculate the average
    let average = scores.map((a,b) => a + b)
  return Math.round(average)
}

console.log(average([4,2,5]));
