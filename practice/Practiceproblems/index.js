// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


 function test(array){
   let result
   // returning result for multiplying the values inside an array that's beign passed in
  return result= array.reduce((sum,current) => sum * current,0);
 }
 // console.log(test());
 // let array =[2,3,5];

 function multiply (arr){
 let temp;
 let mult=1;
 for (var i = 0; i < arr.length; i++) {

   temp=parseInt(arr[i]);
    mult = mult * parseInt(temp)

 }
 return mult
}
 console.log(multiply([3,3]));
