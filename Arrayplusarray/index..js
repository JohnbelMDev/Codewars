
//declare an annoymous function with two parameter store in arrayPlusArray
var arrayPlusArray =function (arr1, arr2) {
 var sum=0;
 for (var i=0; i< arr1.length;i++)
     sum+=arr1[i];
 for (var secondArray=0; secondArray< arr2.length;secondArray++)
      sum+=arr2[secondArray];

   return sum;


}
