function printArray(array){
  //show me the code!
    let word = array.toString().split('')
    let product
    let concatnumber = []
        for (var i = 0; i < word.length; i++) {
          product = word[i] * word[i]
          concatnumber = concatnumber.concat(product)
          // console.log(concatnumber);
        }
        return parseInt(concatnumber.join(''))

}


console.log(printArray(9119));
