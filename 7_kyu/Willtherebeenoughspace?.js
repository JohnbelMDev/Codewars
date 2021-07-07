function enough(cap, on, wait) {
  // your code here
   if (on + wait < cap){
  return 0;
  } else {
  return (on + wait) - cap;
  }
}
