// Javascript: return multiples into an array
//
function multiples(s1,s2,s3){
  let answer = []
  for (var i = 1; i < s3; i++) {
     if(i % s1 === 0 && i % s2 === 0){
       answer.push(i)
     }
  }
  
  return answer
}


console.log(multiples(2,4,40));
