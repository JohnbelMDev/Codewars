// params: takes an intenger
// return Java if intenger divisible by 3
// return Coffe if intenger divisible by 3 and 4
// return Java if intenger divisible by 3


function caffeineBuzz(n){
  if (n % 12 === 0) return 'CoffeeScript'
  if (n % 6 === 0) return 'JavaScript'
  if (n % 3 === 0) return 'Java'
  return 'mocha_missing!'
}


console.log(caffeineBuzz(1));
console.log(caffeineBuzz(3));
console.log(caffeineBuzz(6));
console.log(caffeineBuzz(12));
