// only return the number that are even

function getEvenNumbers(numbersArray){
  // filter out the odd numbers

  return numbersArray.filter(x => x % 2==0)

}

console.log(getEvenNumbers([2,4,5,6]));
