function missionImpossible(obj){

//code here
if(obj['Raj']) obj.Raj = 'In a relationship'
  return obj

console.log('hello', obj);

}
var wholeGroup = { Leonard: 'Married',
  Penny: 'Married',
  Howard: 'Married',
  Bernadette: 'Married',
  Sheldon: 'In a relationship',

}
console.log(missionImpossible(wholeGroup));
