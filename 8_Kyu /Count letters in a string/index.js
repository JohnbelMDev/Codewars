function countLetters (string) {
  let object = {}
  if(typeof string !== 'string'){
    return null
  }
  else {
  let removeWhiteSpace = string.replace(/\s/g, "");
  let onlyLetters = removeWhiteSpace.replace(/[^a-zA-Z]+/g, '');
  let splitString = onlyLetters.split('')
  let temp = []
  for (var i = 0; i < splitString.length; i++) {
    let letter = splitString[i].toLowerCase()
    temp.push(letter)
    if(object[letter]){
      object[letter]++
    }
    else {
      object[letter] = 1
    }
  }
  }
    return object

}

console.log(countLetters(3));
