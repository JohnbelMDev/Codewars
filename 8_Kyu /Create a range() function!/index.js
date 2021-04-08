function range(min, max, step) {
  let range = []
  let total = 0;
  let answer = []
  range.push(min)

  for (let i = 0; i < max; i++) {
    range.push(range[i] + step)
    total = range[i]
    answer.push(total)
  }
  let rangeAnswer = []
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] <= max) {
      rangeAnswer.push(answer[i])
    }
  }
  return rangeAnswer
}

console.log(range(2, 10, 2));
