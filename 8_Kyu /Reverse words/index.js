function sumprime(num){
  let total = 0;

  function isprime(i){
    for (let j = 2; j < i; j++) {
     if( i % j === 0){
       return false
     }
    }
    return true
  }
  for (let i = 2; i <= num; i++) {
    if (isprime(i)) {
      total+=i
    }
  }
  return total;

}


console.log(sumprime(10));
