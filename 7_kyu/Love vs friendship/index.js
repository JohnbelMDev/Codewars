// passing a letter as my string
//return numbers of time added by each string
// example
    //a => 1
    //b => 2
    // return 3


function wordsToMarks(string){
  let split = string.split('')
  let alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase()
  let splitString = alphabet.split('')
  let total = 0;
  for (let i =0; i < splitString.length; i++) {
    for (let z = 0; z < split.length; z++) {
      if(splitString[i].includes(split[z])){
        total +=i
      }
    }
  }
  return total




}






// console.log(wordsToMarks('ab'));
console.log(wordsToMarks('dickjzzi'));
