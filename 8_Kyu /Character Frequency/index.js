function charFreq(message) {
    // awesome counter code
      let object = {}
        for(let i = 0; i < message.length; i++){
          let letter = message[i]
            if(object[letter]){
              object[letter]++
            }
          else{
             object[letter] = 1
          }
          
        }
      return object
    }