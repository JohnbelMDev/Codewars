var capitals = function (word) {
	// Write your code here
  let answer = []
  for (var i = 0; i < word.length; i++) {
    if(word[i] === word[i].toUpperCase()){
      answer.push(i)
    }
  }
  return answer
};

console.log(capitals('CodEWaRs'));
