var hotpo = function(n){
  let step = 0
  if(n == 1){
    return 0

  }
  while(n > 1) {
      if(n % 2 === 0){
        n = n / 2
        step++
      }
      else {
        n = (n * 3) + 1
        step++
      }

      if(n == 1){
        return step
      }
    }


}
