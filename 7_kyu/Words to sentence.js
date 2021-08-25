// params: taken an array
// returning a string of words separate by spaces
// ["I","Love","Cake"] => I love Cake


function wordsToSentence(words) {
  return words.join(' ');
}
console.log(wordsToSentence(["hello", "world"] ));
