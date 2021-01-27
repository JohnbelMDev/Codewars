function typist(s){
  let splitString = s.split('')

    //
    // 'aA'=>  ['a','cap','A']
    // 'Aa' => ['Cap','A','cap','a']
    // 'BAba' => ['cap','B','A','cap','b','a'] 6
    let capiTalisealphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    // split it which will turn into an array
    // loop through the array
    // boolean that states wheter or not the cap true
    let cap = false;
    let current;
    let counter = 0;
    for (let i = 0; i < splitString.length; i++){
      // checking for current
        current = splitString[i]
        // ABCaB => [cap,A,B,C,cap,a,cap,B] => 8
        if(capiTalisealphabet.includes(current)){
            if(cap === false){
                cap = true;
                counter++;
            }

        }
        else {
            if(cap === true){
              cap = false;
              counter++
            }
        }

     counter++

    }
return counter;
}
// [a,cap,B,cap,a,cap,B] 7
console.log(typist('A'));
