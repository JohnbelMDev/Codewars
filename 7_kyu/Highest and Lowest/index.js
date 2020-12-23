function highAndLow(numbers) {
  
  let numbersplit = numbers.split(' ')
  let sortedNumber = numbersplit.sort((a, b) => b - a)
  let highest = sortedNumber[0]
  let lowersnumber = sortedNumber.pop()
  let answer = highest.concat(' ', lowersnumber)
  return answer
}



console.log(highAndLow('29 2 3 4 1 5'));
