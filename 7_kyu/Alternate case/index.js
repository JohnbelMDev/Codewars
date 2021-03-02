function alternateCase(s) {
  let upperandLowerCaser =''
  for (var i = 0; i < s.length; i++) {

     if(s[i] === s[i].toLowerCase()){
       upperandLowerCaser+=s[i].toUpperCase()

     }
  else{
       // console.log(s[i].toUpperCase());
        upperandLowerCaser+=s[i].toLowerCase()

     }
  }
  return upperandLowerCaser.replace(/\s+/g, ' ').trim()


}

console.log(alternateCase('Hello World'));
