function longest(s1, s2) {
  let uniquewordsS1 = [...new Set(s1)]
  let uniquewordsS2 = [...new Set(s2)]
  let sorts1 = uniquewordsS1.sort().join('')
  let sorts2 = uniquewordsS2.sort().join('')
  let concat = sorts1.concat(sorts2)
  let unique = [...new Set(concat)]
  let sorted = unique.sort()
  let answer = sorted.sort().join('')
  return answer
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
