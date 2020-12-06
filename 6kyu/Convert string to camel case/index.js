
function toCamelCase(string) {
  let stringSplitbyDashed = string.split('-')
  stringSplitbyDashed = stringSplitbyDashed[0]
  if (string.includes('-')) {
    let dashedSplit = string.split('-').slice(1)
    dashedSplit = dashedSplit.map(words => words[0].toUpperCase() + words.substring(1)).join('');
    stringSplitbyDashed = [stringSplitbyDashed, dashedSplit].join('')
    return stringSplitbyDashed
  } else if (string.includes('_')) {
    let st = string.split('_')
    st = st[0]
    let underscoreSplit = string.split('_').slice(1)
    underscoreSplit = underscoreSplit.map(words => words[0].toUpperCase() + words.substring(1)).join('');
    st = [st, underscoreSplit].join('')
    return st
  } else {
    return ''
  }

}


// the first  word

  // hello 
