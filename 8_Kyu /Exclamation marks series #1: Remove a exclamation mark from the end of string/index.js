function remove(s){
  if(s[s.length-1] == '!'){//⇐= check if the last index is equal to the exclamation
return s.slice(0,-1)
// [ Hi!] => [‘h’,’i’,’!’] => new string would be [‘h’,’i’,’!’]

} else {
  console.log('n');
return s   // if there's none at last index then return that
}


}

console.log(remove("Hi!n!"));
