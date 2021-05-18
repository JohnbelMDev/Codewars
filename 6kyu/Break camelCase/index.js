// toCamelCase
function toCamelCase(string) {

    let stringSplitbyDashed = string.split('')
    // console.log(stringSplitbyDashed);
    stringSplitbyDashed = stringSplitbyDashed[0]
      let dashedSplit = string.split('').slice(1)
      dashedSplit = dashedSplit.map(words => words[0].toUpperCase() + words.substring(1)).join('');
      stringSplitbyDashed = [stringSplitbyDashed, dashedSplit].join('')
      console.log(stringSplitbyDashed);
      return stringSplitbyDashed




}

console.log(toCamelCase('camelCasing'));
