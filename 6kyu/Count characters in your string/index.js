function count (string) {
  // The function code should be here
  let object = {};

     for(let i = 0;  i < string.length; i++){
       let letter = string[i]
       if(object[letter]){
         object[letter]++
       }
       else{
         object[letter] = 1
       }
     }
  console.log('object',object)
  return object

}
