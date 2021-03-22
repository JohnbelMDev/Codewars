// receiving an array as my parameter
// return sum in 20 years



function stairsIn20(s){
  //your code here
  var arr = [].concat(...s)
   return arr.reduce((a, b) => a+b)*20
}
console.log(stairsIn20([2,3,4,[2]]));
