var palindromeChecker = function(string) {
  //your code goes here
  let word = string.toLowerCase()
  let reverse = word.split('').reverse().join('')
  if (reverse === word) {
    return true
  }
  return false
}


console.log(palindromeChecker('Bob'));
