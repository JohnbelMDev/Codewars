








function deleteNth(array,n){
  let object = {}
  let counter = 0
  // object.push(arr)
  for (var i = 0; i < array.length; i++) {
    object[array[i]] = counter
    console.log(object);
  }
}

console.log(deleteNth([4,2,3,30]));
