// is isannagram is a number that is the same k


function isannagram (string, string2){
   return formatst (string) === formatst(string2)

  function formatst(str){
    return str
    .replace(/[^\w]/g,'')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  }

}



console.log(isannagram("elbow" ,"below"));
