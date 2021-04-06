function letterCount(s){
  //your code here
   let splitString = s.split('')
   let newStringArray = []
   let uniqueObject = {}
   for (var i = 0; i < s.length; i++) {
     newStringArray.push(s[i])
     let letter = newStringArray[i].toLowerCase()
     if(uniqueObject[letter]){
       uniqueObject[letter]++
     }
     else {
       uniqueObject[letter] = 1
     }
   }
   return uniqueObject
}

console.log(letterCount('Arithmetics'));
