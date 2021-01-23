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


function typist(s){
  //coding and coding..
   let splitString = s.split('')
   let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

   // console.log(alphabet);
   let count = 0;
   let uppCase = 1;

  for (var i = 0; i < splitString.length; i++) {
    count+=1
    if(alphabet.includes(splitString[i]) || ){
      console.log(splitString[i])
      uppCase+=1
    }


  }
  return uppCase

   // console.log(upperCaseSplit);
}

console.log(typist("aaAA"));
// console.log(typist("A"));
