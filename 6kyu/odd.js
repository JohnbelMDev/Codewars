function findOdd(A) {
  //happy coding!
//   checking and seting an empty object
  let emtptyObject ={};

  for(var i=0; i<A.length;i++){
    if(emtptyObject[A[i]]){
      emtptyObject[A[i]]++
      }
    else{
      emtptyObject[A[i]]=1;
    }
  }

  for(let start in emtptyObject)
    if(emtptyObject[start]%2 !==0){
      return parseInt(start)
    }


  return 0;
}
