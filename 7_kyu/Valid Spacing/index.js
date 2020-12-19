function validSpacing(s) {
  // write your code here
  
  let space = s.replace(/\s+/g, ' ').trim()
  if(space !== s){
    return false;
  }
 else{
   return true
 }
}


// console.log(validSpacing('Helloworld'));
// console.log(validSpacing('Hello  world'));
console.log(validSpacing('p Gp dm' ));
