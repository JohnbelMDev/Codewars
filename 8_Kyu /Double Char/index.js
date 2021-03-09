// take a string as an input
// return each string repeated once
//example today => ttooddaayy
function doubleChar(str) {
  // Your code here
  let newStrig = ''
 for (var i = 0; i < str.length; i++) {
   newStrig +=str[i].repeat(2)

 }
 return newStrig

}

console.log(doubleChar('String'));
