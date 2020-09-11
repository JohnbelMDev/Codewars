function facRecursion(value){
  if(value <= 0){
    return 0;
    }
  else if(value === 1 || value === 0){
     return 1;
  }

  else{
  return value *  facRecursion(value - 1);
    }
}
