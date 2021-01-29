function exisDuplicate(numbers){
  let count = 0;
 let unique =[...new Set(numbers)]
 // console.log(unique);
  return unique.length !== numbers.length

}
console.log(exisDuplicate([4,7,3,3]));
