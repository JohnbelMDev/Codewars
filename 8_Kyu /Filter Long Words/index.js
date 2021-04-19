function filterLongWords(sentence, n) {
  //Solution here
      let splitString = sentence.split(' ')
      // console.log(splitString);
      let moreThanN = []
      for(let i = 0; i < splitString.length; i++){
        let lengthWord = splitString[i].length
          if(lengthWord > n){
            moreThanN.push(splitString[i])
          }

}
return moreThanN

}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog",4));
