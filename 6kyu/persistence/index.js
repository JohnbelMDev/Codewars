function persistence(num) {
   //code me
//   taking a positing parameter
// split the numbers
// keep a counter for the time we multiply

     let product=num
     let count=0;

    while(product >9 ){
        let temp = product.toString().split('');
       product =1;
      for(var i=0; i<temp.length;i++){
       product *=temp[i]

     }

  count+=1;

}

      return count
}
