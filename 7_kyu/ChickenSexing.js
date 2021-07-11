// Taken an array of string
// return number depending the amount of time that they agree

function correctness(bobsDecisions, expertDecisions) {
  let count = 0;
    for(let i = 0; i < bobsDecisions.length; i++){
      if(bobsDecisions[i] === expertDecisions[i] ){
        count++
      }
      else if(bobsDecisions[i] == "?" || expertDecisions[i] === '?'){
        count+=0.5
      }
    }
  return count
