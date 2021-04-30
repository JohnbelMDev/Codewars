function evenLast(numbers) {
  // Good luck
  let sum = 0;
  if(numbers.length === 0){
    return 0
  }
  for (var i = 0; i < numbers.length; i++) {
    if(i % 2 == 0){
      sum+=numbers[i]

    }
  }
  return sum * numbers[numbers.length - 1]
  // console.log(sum * numbers[numbers.length - 1]);
}

console.log(evenLast([ 40, 43, 18, 97, 19 ]));
