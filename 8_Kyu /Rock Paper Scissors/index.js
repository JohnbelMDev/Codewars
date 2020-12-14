const rps = (p1, p2) => {
       if (p1 === 'scissors' && p2 === 'paper'){
         return p1 = 'Player 1 won!'
       }
       else if (p1 === 'scissors' && p2==='rock') {
         return p2 = 'Player 2 won!'
       }
       else {
         return 'Draw'
       }


};


console.log(rps('scissors','paper'));
