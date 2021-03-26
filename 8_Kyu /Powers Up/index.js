function powersUp(number, upTo) {
  // your code
  let num = [];
  num.push(number)
  for (let i =2; i <= upTo; i++) {
    num.push(number)
      for (let i = 1; i < num.length; i++) {
        num[i]*=number
      }
}
const sum = num.reduce((a,b) => a + b)
return sum
}

console.log(powersUp(3,5));
