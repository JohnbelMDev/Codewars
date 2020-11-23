function wordGenerator(str){
  //your code here
  // need to anylyze
  return [...str.toLowerCase()].reduce((s, v) =>
     [].concat(...(/[aeiou]/.test(v) ? [...'aeiou'] : [v]).map(c => s.map(t => t + c))), ['']).sort()

}

console.log(wordGenerator('Pszczyna'));
