function largestPairSum(numbers)
{
     let sortNumber = numbers.sort((a,b) => b - a)
     return sortNumber[0] + sortNumber[1]
     console.log(sortNumber);
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
