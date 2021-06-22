function strCount(str, letter){
  //code here
  let count = 0;
  for (var i = 0; i < str.length; i++) {
      if(letter === str[i]){
          count++
      }
  }
  return count
}

console.log(strCount('Hello', 'l'));
