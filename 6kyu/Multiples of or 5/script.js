function solution(number){
  var sum =0;

  for(var i=0; i<10; i++){
    if(number%3==0 || number%5==0){
      sum +=1;
      return sum;

  }
    else if(number<0){
      return -1;
    }
  }

}
