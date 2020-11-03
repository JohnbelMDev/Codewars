function test (array){
let sum =0;
let average;
  for (var i = 0; i < array.length; i++) {
    sum +=array[i]
    average = parseInt(sum) / parseInt(array.length);
  }
  return parseInt(average);
}

console.log(test([11, 2, 3]));
