
function whoIsPaying(name){
  //your code here
// let temp =[]
if(name.length<=2){
  return[name]
}
else{
  return [name, name.slice(0,2)]
}
}


console.log(whoIsPaying("Mexico"));
