function findSum(n) {
  let multipleOf5
  let multipleOf3
  let sum = 0;
  for (let i =1; i <= n; i++){
    multipleOf5 = i * 5
    multipleOf3 = i * 3
    if(multipleOf5 % 3 === 0 || multipleOf3 % 5 === 0){
      sum +=i
    }
}
return sum
}
