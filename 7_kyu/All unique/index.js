function hasUniqueChars(str){
  // ...
  let unique = [...new Set(str)]
   unique = unique.join('')

   if(unique !== str){
     return false
   }
   else {
     return true
   }
}


console.log(hasUniqueChars('abccdef'));
