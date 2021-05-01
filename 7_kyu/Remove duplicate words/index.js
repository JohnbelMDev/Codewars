function removeDuplicateWords (s) {
  // your perfect code...
  // console.log(s);
  let splitString = s.split(' ')
  console.log(splitString);
  let unique = [...new Set(splitString)]
 return unique.join(' ')
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
