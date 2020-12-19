function longest(w,w2) {


  return format(w)  === format(w2)


function format(st){

  return st
  .toLowerCase()
  .replace(/[\w]/g)
  .split('')
  .sort()
  .join('')

}

}




console.log(longest('elbow', 'blow'));
