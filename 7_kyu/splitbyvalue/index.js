function splitByValue(k, elements){
  //   value is checking wheter or not if a value is less than k
  let value = elements.filter(words => words < k)
// value is checking wheter or not if a value is greater than k
  let value2 = elements.filter(words => words >=k)
  console.log(value,value2 )

console.log("hii");
  return (value.concat(value2))
}
