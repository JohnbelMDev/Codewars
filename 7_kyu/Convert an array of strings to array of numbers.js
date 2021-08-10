function toNumberArray(stringarray){
  let number;
  let numberArray = []
  for(let i = 0;  i < stringarray.length; i++){
      number = Number(stringarray[i])
     numberArray.push(number)
  }
  return numberArray
}
console.log(toNumberArray(["1", "2", "3"] ));
console.log(toNumberArray(["1.1","2.2","3.3"]));
