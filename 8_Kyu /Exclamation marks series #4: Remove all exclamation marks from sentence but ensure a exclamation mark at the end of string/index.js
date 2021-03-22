function remove(s) {
  //coding and coding....
  let removeExclamationPoin = s.split("!").join('')
  let array = []
  array.push(removeExclamationPoin)
  array.push('!')
  let answer = array.join('')
  return answer

}

console.log(remove('Hi!!!'));
