function repeatit (str,n){
  let string = []
  let answer = ''
  for (var i = 0; i < n; i++) {
    string.push(str)
    if (typeof str !== 'string'){
      return 'Not a string'
    }

  }
  return string.join('')


}
console.log(repeatit(12,3));
