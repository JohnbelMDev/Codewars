function countLettersAndDigits(input) {
  let count = 0;
  let letterNumber = /^[0-9a-zA-Z]+$/;
  let array = [];
  for (let i = 0;  i < input.length; i++){
    let string = input[i]
  if( (/[a-zA-Z]/).test(string)){
    array.push(string)
  }
   if (!isNaN(parseFloat(string)) && isFinite(string)) {
       array.push(string)
  }
}
return array.length
}

console.log(countLettersAndDigits('hel2!lo'));
console.log(countLettersAndDigits("!?..A" ));
console.log(countLettersAndDigits(";4')dN|Uu ;x+4vHRbbtalPa" ));
