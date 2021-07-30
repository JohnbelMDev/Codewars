function divisibleBy(numbers, divisor){
 return numbers.filter(nums => nums % divisor == 0)
}


function divisibleBy(numbers, divisor){
  let multiple = [];

  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % divisor === 0){
      multiple.push(numbers[i])
    }
  }
  return multiple
}


console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
