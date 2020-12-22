function XO(str) {
  let splitString = str.split('')
  let counthex = 0;
  let counttheo = 0;
  let string
  for (var i = 0; i < splitString.length; i++) {
    string = splitString[i]
    if (string.includes('x') || string.includes('X')) {
      counthex++
    } else if (string.includes('o') || string.includes('O')) {
      counttheo++;
    }
  }
  if (counthex !== counttheo) {
    return false
  } else {
    return true
  }
}
