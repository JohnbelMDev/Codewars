function noOdds( values ){

  let evenNumbers = []
  for (var i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0){
       evenNumbers.push(values[i])
    }
  }
  return evenNumbers

}

console.log(noOdds([0,1,2,3]));
