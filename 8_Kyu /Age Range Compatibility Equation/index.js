function datingRange(age){
   if (age <= 14){
     let ageMinanswer = Math.floor (age - 0.10 * age)
     let ageMaxanswer = Math.floor (age + 0.10 * age)
     let arrayAge = [ageMinanswer,ageMaxanswer]
     let splitByDash = arrayAge.join('-')
     return splitByDash
   }
   else {
     let ageMin = Math.floor((age / 2) + 7)
     let ageMax = Math.floor((age - 7) * 2)
     let array = [ageMin,ageMax]
     // console.dir(ageMax.toString());
     let splitString = array.join('-')
     return splitString
   }





}

console.log(datingRange(17));
