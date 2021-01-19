//taking two arrays as my parameter
// return the difference of both String substracted



function mxdiflg(a1, a2) {
    // your code
  let maxa1Length = [];
  let maxa2Length = [];

  let i;
  let z;
  let sort;
  let sortb;
  let diffrence;


  for (i = 0; i < a1.length; i++) {
    maxa1Length.push(a1[i].length)
    // console.log(a1[i].length);
    sort = maxa1Length.sort((a,b) => a - b)

  }
  console.log(sort[0]);
  for (z = 0; z < a2.length; z++) {
    maxa2Length.push(a2[z].length)
    sortb = maxa2Length.sort((a,b) => b - a)
}
  diffrence = sortb[0] - sort[0]
  console.log(sortb[0]);
  return diffrence

}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"],["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));
