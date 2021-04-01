function printValues(n){
  let newArray = []
  for(let i = 1; i <= n; i++){
    if( i % 7 == 0 && i % 5 == 0){
       newArray.push("CodeWars")
    }
    else if(i % 5 == 0){
      newArray.push( "Wars")
    }
    else if (i % 7 == 0){
      newArray.push( "Code")
    }
    else {
      newArray.push(i)

    }

  }
  return newArray
}
console.log(printValues(10));
