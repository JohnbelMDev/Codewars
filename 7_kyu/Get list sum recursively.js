function sumR(x) {
  return (x.length === 0) ? 0 : x[0] + sumR(x.slice(1));
}

console.log(sumR([1,1,1]));
