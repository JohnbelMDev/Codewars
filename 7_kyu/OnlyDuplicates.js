// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

function onlyDuplicates(str) {
  // your code here
  let unique =[...new Set(str)]
  let answer = ""
  let count;
  for (var i = 0; i < unique.length; i++) {
    count = 0
       for (var z = 0; z < str.length; z++) {
         if(unique[i] === str[z]){
           count++
           if(count > 1){
             answer+=str[z]
           }
         }
    }

}
return answer
}
console.log(onlyDuplicates("abccdefee"));//cceee
console.log(onlyDuplicates('colloquial'));//ollol
