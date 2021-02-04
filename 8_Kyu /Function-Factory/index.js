// taking in three parameters, x,y which represent the numbers
// returning the value depending on the operator

//example
// 2,3, + => 5

// create a function for each operator



function functionFactory(x,y,operator){
  if (operator === "+"){
    return ()=> x+y;
  }
  else if (operator === "-"){
    return ()=> x-y;
  }else if (operator === "*"){
    return ()=> x*y;
  }else if (operator === "/""){
    return ()=> x/y;
  }
}

console.log(functionFactory(2,3,'+'));
