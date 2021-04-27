function joinStrings(string1, string2){
   // code here
   let temp = [string1,string2]
   let x = temp.toString()
   let count = (x.match(/,/g) || []).length
   if( count == 1){
console.log('3');
     return x.replace(',', ' ')
   }
   else {
     // console.log('Hi');
     let remove = x.replace(',', '')
     console.log(remove);
     return remove
   }
   // console.log(count); //logs 3

}

console.log(joinStrings('a,','string2'));
