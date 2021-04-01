function  kidoCount(n){
  let newArray = []
  for (var i = 0; i <=  n; i++) {
   if( i % 2 !==0){
newArray.push(i)
   }
  }
  return newArray
}
console.log(kidoCount(0));
