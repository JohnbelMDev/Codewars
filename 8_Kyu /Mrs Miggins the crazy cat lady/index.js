function mrsMiggins(str) {
  //Help Mrs Miggins here!
  let stringArray = []
  let strSplit = str.split(' ')
  for (var i = 0; i < strSplit.length; i++) {
    if(strSplit[i] == 'pension' || strSplit[i] == 'dog' || strSplit[i] == 'children'
    || strSplit[i] == 'broccoli'    || strSplit[i] == 'rain' || strSplit[i] == 'RAIN'

  )
  {
    strSplit[i] = 'cat'
  }
  if (strSplit[i] == 'pension?' ) {
    strSplit[i] = 'cat?'
  }
  if (strSplit[i] == 'pension,' || strSplit[i] == 'rain,') {
    strSplit[i] = 'cat,'
  }
  if(strSplit[i] == 'dog!'){
    strSplit[i] = 'cat!'
  }
  if(strSplit[i] == 'dog?'){
    strSplit[i] = 'cat?'
  }
  if(strSplit[i] == 'CHILDREN\'s'){
    strSplit[i] = 'cat\'s'
  }
}

return strSplit.join(' ')
}

// console.log(mrsMiggins('do you want to go for a walk in the cat and talk about your pension?'));
console.log(mrsMiggins('I cat on THE CHILDREN\'s cat'));
