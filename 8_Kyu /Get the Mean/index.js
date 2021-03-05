function calculateMean(...x) {
  return +(x.reduce((a,b)=>a+b,0)/x.length).toFixed(2)

};


console.log(calculateMean(6,3,9,7,3,4));
