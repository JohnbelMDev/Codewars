function likes(names) {
  // TODO
  let temp = [];
  if (names.length == 0) {
   names[0] = 'no one likes this';
    return names.toString()
  }
   for (var i = 0; i < names.length; i++) {
   if (names.length == 0) {
     temp = names.toString()
     temp = 4
    return names.push(temp,)
   }
    else if (names.length ==1) {
      temp = names.toString()
      return temp + " likes this"
    }
    else if (names.length ==2) {
      temp = names[0].toString()
      return temp + " and " + names[1] + " like this"
    }

    else if (names.length ==2) {
      temp = names[0].toString()
      return temp + ', ' + names[1] + ' and ' + names[2] + " like this"
    }

    else if (names.length > 3) {
      temp = names[0].toString()
     return (`${names[0]}, ${names[1]} and ${names.length - 2} other like this`);
   }
 }
  }


console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
