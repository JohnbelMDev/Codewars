function oddOnly(arr1){
  //happy coding!
  let odd =[]
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0)
    {
        odd.push(arr1[i])
    }

  }
  return odd

}


console.log(oddOnly([1,5,8,6,3]));
