function mergeArrays(num, num1) {
  // your code here
  var returnArray = [];
  var counter = 0;
  while (num[counter] || num1[counter] ){
    if(num[counter]){
      returnArray.push(num[counter]);
    }
    if(num1[counter]){
      returnArray.push(num1[counter]);
    }
    counter++;

   }
   return returnArray;
}
