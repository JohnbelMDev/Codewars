function sumStr(num) {
  if (num.length !== 0){
      return num.reduce( (a,b) => a + b)
  }
  else {
    return 0

  }

}

// console.log(sumStr("4","5"));
console.log(sumStr([]));
