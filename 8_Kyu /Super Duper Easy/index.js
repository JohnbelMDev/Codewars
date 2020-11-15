function problem(x){
 //Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
  let temp = x * 50
//   checking x value type
  if(typeof x === "string"){
    return "Error"
  }
  else {
//     return the final if everything goes well
    temp = temp + 6

return temp
  }
}
