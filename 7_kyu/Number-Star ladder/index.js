// n is the parameter which is the size




function pattern(n) {
  var output = "*";
  //being coder
  let temp
  let last = []
  let num1 = 1
  let answer = '';
  let i = 1
  for (i; i <= n; i++) {
    temp = output.repeat(i - 1)
    i * 1
  if (i === 1){
    temp += ''
  }
  else {
   temp += i
  }
  if(i==n){
    temp +=''
  }
  else {
    temp +='\n'
  }
temp = num1 + temp
    answer += temp

  }
  return answer
}

console.log(pattern(4));
