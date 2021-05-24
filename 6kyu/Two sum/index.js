// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
  // ...
  let newArray = []
  let indexes = []
    newArray.push(numbers)
    // console.log(newArray);
   for (var i = 0; i < numbers.length; i++) {

     for (let j = 0; j < newArray[0].length; j++) {
       // console.log(newArray[j]);
         if(numbers[i] + newArray[0][j] === target){
           indexes.push(i,j)
           return indexes
         }
     }
   }
}

console.log(twoSum([1, 2, 3], 4));
