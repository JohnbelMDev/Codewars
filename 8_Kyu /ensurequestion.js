function ensureQuestion(s) {
  // Code here
  let last = s.split('')
  if(last[last.length - 1] !== '?'){
    last.push('?')
    return last.join('')
  }
  else {
    return last.join('')
  }
}

console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("NO??"));
