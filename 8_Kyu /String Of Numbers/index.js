let strOfNums = (num1, num2) => {
   let number1 = parseInt(num1.toString())
 
  //  console.log(number1);
   let number2 = parseInt(num2.toString())
   if(isNaN(parseFloat(number1))){
    return number2
  }
  else{
    return number1 + number2
  }
  //  console.log(number2);

    
    
}

console.log(strOfNums([[[[[[[]]]]]]], [[[9]]]));