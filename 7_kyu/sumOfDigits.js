// https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript


function sum(digits) {
  let singleDigits = digits.toString().split('')
  let singleDigitsArray = []
    for(let i = 0; i < singleDigits.length; i++){
      let number = parseInt(singleDigits[i])
      singleDigitsArray.push(number)
    }
    return singleDigitsArray.reduce((a,b) => a + b)
}
console.log(sum('3433'));
console.log(sum(3323));
