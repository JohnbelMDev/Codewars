// create a counter to keep track of negative



function twoArePositive(a, b, c) {
  let answer = []
  answer.push(a,b,c)
  let count = 0;
  for (var i = 0; i < answer.length; i++) {
    let num = answer[i]
    if(Math.sign(num) == 1 ){
      count++
    }
  }
  if(count === 2){
    return true
  }
  return false
}
console.log(twoArePositive(-14 ,-3 ,4));
