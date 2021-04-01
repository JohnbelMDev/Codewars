function sumNumbers(...arg) {
  // your code here
  // console.log(arg);
  return [...arg].filter(Number).reduce((a,b) => a + b, 0)

}
console.log(sumNumbers(1,'3','4'));
