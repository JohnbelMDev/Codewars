function addingShifted (arrays, shift) {
  let result = [];
  let begin = 0;
  for (let array of arrays) {
    for (let i = 0; i < array.length; i += 1) {
      result[begin + i] = (result[begin + i] || 0) + array[i];
    }
    begin += shift;
  }
  return result;
}
