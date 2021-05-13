function shorter_reverse_longer(a,b){
  let string = []
      string.push(a,b)
       let sort = string.sort((a, b) => b.length - a.length)
       let largerWord = sort[0].split('').reverse().join('')
       let smallesWord = sort[1]
       let words = [smallesWord,largerWord,smallesWord]
  return words.join("")

}
console.log(shorter_reverse_longer("first", "abcde"));
console.log(shorter_reverse_longer("abcde", "fghifuck"));
