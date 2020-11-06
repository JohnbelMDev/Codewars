function solve (s) {
  let upper = 0;
  let lower = 0;
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i])
    if (s[i] === s[i].toUpperCase()) upper++;
    //console.log(upper)
    if(s[i] === s[i].toLowerCase()) lower++;
  }

  if  (upper === lower) return s.toLowerCase();
  if  (lower > upper) return s.toLowerCase();
  if  (upper > lower) return s.toUpperCase();

}
