function remove(s) {

  let removeExclamationPoin = s.split("!").join('')
  let array = []
  array.push(removeExclamationPoin)
  array.push('!')
  let answer = array.join('')
  return answer

}
