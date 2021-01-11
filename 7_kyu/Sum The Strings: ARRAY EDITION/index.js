// taking in two arrays of string
// return array with their sum

function sumArr(a,b) {
  return a.map((x, i) => {
    const aValue = parseInt(x) || 0;
    const bValue = parseInt(b[i]) || 0;
    const sum = aValue + bValue;
    return sum.toString();
  });
}


console.log(sumArr(['1','3','f'],['2','4']));
