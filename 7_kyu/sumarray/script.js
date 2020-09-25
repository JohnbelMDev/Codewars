function repeats(arr){
// numbers are going to be store in an array
//   Check if they are going t0 be any duplicates
//   add any numbers that are not duplicates
  const object ={}
          var total=0;

//   var count;
  for(var i=0;i<arr.length;i++){
    if(object[arr[i].toString()]){
      object[arr[i].toString()]+=1
    }
    else {

      object[arr[i].toString()]=1

    }
  }

  console.log(object)
  for (const property in object) {
  console.log(object[property]);
    if(object[property]===1)
      {
        total += parseInt(property)
      }
}
  return total;

};
