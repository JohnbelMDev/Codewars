// value type will be array
// return the sum of the two lowest value inside of that array
// example
    //[3,2,1,4,9] => 1 + 2 => should return 3

    // create a variable call sortLeasttoHighest to sort the array from least to greatest
    // create a variable call sum = sortLeasttoHighest[0] + sortLeasttoHighest[1]
    // return sum


function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sortLeasttoHighest = numbers.sort((a,b) => a - b)
  let sum = sortLeasttoHighest[0] + sortLeasttoHighest[1]
  return sum
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
