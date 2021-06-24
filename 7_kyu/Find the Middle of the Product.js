function findMiddle(str){

  let numbers = 1;
  for (var i = 0; i < str.length; i++) {
    if(!isNaN(str[i])){
      numbers *= parseInt(str[i])
    }

  }
  let a = []
  let string = numbers.toString()

  var middle = string[Math.round((string.length - 1) / 2)];

  console.log(middle);

}
console.log(findMiddle('159d9si63jdds'));
