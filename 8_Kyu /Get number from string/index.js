function getNumberFromString(s){
let removestring = s.replace(/[^0-9]/g,'');
  return parseInt(removestring)
}
console.log(getNumberFromString("this is number: 7"));
