// params: taken an array
// returning a string of words separate by spaces
// ["I","Love","cake"] => I love cake

function wordsToSentence(words) {
  return words.join(' ');
}
console.log(wordsToSentence(["hello", "world"] ));
