function solution(nums){
// console.log(nums);
   if(nums === null){
     return []
   }
   else {
     return nums.sort((a, b) => a - b);

   }

}


console.log(solution([1,23,4]));
// console.log(solution());
