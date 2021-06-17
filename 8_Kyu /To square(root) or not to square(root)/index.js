// params : array, will never be empty
// return a new array for squarooting numbers

// example
       // [2,3,4,5,6] => [4,9,16,25,36]


let squareOrSquareRoot = function (array) {
  let answer = []
  for (var i = 0; i < array.length; i++) {
     if(isSquare(array[i])){
       answer.push(Math.sqrt(array[i]))
     }
     else {
       answer.push(Math.pow(array[i],2))
     }
  }
  return answer

}

let isSquare = function (n) {
  if(n > 0 && Math.sqrt(n) % 1 === 0 ) return true
  return false
};
console.log(squareOrSquareRoot([4,3,9,7,2,1]));
// console.log(squareOrSquareRoot([4]));
// console.log(squareOrSquareRoot([2,3,4,5,6]));
