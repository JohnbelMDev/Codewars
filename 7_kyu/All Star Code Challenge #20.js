// https://www.codewars.com/kata/5865a75da5f19147370000c7/train/javascript

// Params: Taking in a array
// return sum of array combine with equal length

// example
     //[1,2,3] => [2,1,4] => [3,3,7]
     //[1] => error



     function addArrays(array1, array2) {
     //code here
     let sum = []
     let count = 0;
     let total = 0;
      if(array1.length != array2.length) {
         throw new Error("error");
       }
       else {

           for (var i = 0; i < array1.length; i++) {
         total = array1[i] + array2[count++]
         sum.push(total)
       }



       return sum

       }




     }

console.log(addArrays([1,2],[4,5]));
console.log(addArrays([1,2,3],[4,5]));
