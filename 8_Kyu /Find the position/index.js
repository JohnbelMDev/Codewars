function position(letter){
//Write your own Code!
 let lettersplit = letter.split(' ')
  let answer = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.toLowerCase()
   let split = answer.split(',')
   for (let i = 0; i <= split.length; i++) {
     if((letter) == split[i]){
       return `Position of alphabet: ${i + 1}`
     }
   }
}

console.log(position('z'));
