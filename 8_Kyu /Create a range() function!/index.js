function range(start, edge, step) {
  let range = []
  let total = 0;
  let answer = []
  range.push(start)
  if (start >= edge || step >= edge) {
    return []
  }
  for (let i = 0; i < edge; i++) {
    range.push(range[i] + step)
    total = range[i]
    answer.push(total)
  }
  let rangeAnswer = []
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] < edge) {
      rangeAnswer.push(answer[i])
    }
  }
  return rangeAnswer
}

console.log(range(60,10,1));
