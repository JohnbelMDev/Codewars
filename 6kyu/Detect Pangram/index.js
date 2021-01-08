function isPangram(string){
  let splitstring = string.toUpperCase().split("");
  for (let char = 65; char < 91; char++) {
    let alphabet = String.fromCharCode(char);
    if (splitstring.includes(alphabet)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}


console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
