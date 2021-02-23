function uniTotal(a)
{ let splitString = a.split('')
  let total = 0;
    for (let i = 0; i < splitString.length; i++){
      total += splitString[i].charCodeAt(0)

    }
 return total;
}


console.log(uniTotal("Mary Had A Little Lamb"));
