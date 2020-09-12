function number(array){
 var newArr = [];
  if (array.length === 0) {
    return [];
  } else {
    for (var i = 0, len = array.length; i < len; i += 1) {
      newArr.push((i + 1) + ': ' + array[i]);
    }
  }
  return newArr;
}
