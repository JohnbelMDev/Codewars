function powersOfTwo(n) {
  let number = []
  let nums
  let answer = []
  let base = 2
  for (var i = 0; i <= n; i++) {
    number.push(i)
  }
  for (var i = 0; i < number.length; i++) {
    let num = number[i]
    answer.push(Math.pow(base, num))

  }
  return answer
}

console.log(powersOfTwo(4));
