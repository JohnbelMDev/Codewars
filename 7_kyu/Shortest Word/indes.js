function seek(arr,...rest){
  return arr.filter( (x) => !rest.includes(x))


}
console.log(seek([2,3,3,4,6,6,'hello'],2,6,'hello'));
