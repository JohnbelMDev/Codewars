// the input I'm getting that I'm going to be getting will be
// be a string
// Return the number that John tapped the keyboard
//find the time that he press the keyboard
// s = 'a' => 1
// s = 'aa' => 2
// s = "A" => 2
// s = "Aa" 4 => pressing caps is also included 1 for cap being
// press increment by 1 now that's 3 press a now that's 4
// define a counter that check time a certain letter has been pressed
// for every letter that's a capital will be two
//first split all the strings that are being passed
//aaccjjHHHHFNNNkkkHHH
//AA => 3


  function checkUpperCase(letter){
       let splitUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
       let letterSplit = letter.split('')
        let cap =1;
        var z;
        let i;
        for (i=0; i < splitUpperCase.length; i++) {
         for (z=0; z < letterSplit.length; z++) {
            if (splitUpperCase[i] === letterSplit[z]) {
              cap+=letterSplit[z].length

            }
         }
        }
        return cap
  }


  function checkLowerCase(letter){
       let splitLowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('')
       let letterSplit = letter.split('')
        let count = 0;
        var z;
        let i;
        for (i=0; i < splitLowerCase.length; i++) {
         for (z=0; z < letterSplit.length; z++) {
            if (splitLowerCase[i] === letterSplit[z]) {
              count++

            }
         }
        }
    return count
  }

function typist(s){
  //coding and coding..

  return checkUpperCase(s)

}

// console.log(typist("Aa"));
console.log(checkLowerCase("AbcdeB"));
