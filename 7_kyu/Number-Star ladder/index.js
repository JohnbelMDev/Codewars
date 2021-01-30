// n is the parameter which is the size




function pattern(n){
 var output = "*";
  //being coder
  let temp = []
  let last = []
  let num1 =1
  let answer = []
  let i =1
    for (i; i <=n; i++){
      // temp.push(i)
      temp = output.repeat(i-1)
      i * 1
     // answer.push(num1,temp,i)
answer.push([num1,temp,i])
     // console.log(answer);

    }
    console.log(answer);

 // returnconsole.log(i,output,i); output;
}

console.log(pattern(3));
