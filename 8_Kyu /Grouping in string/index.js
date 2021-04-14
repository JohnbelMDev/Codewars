function isCosortAndSumnsecutive(...arr) {

    let sortEd = arr.sort()
    let a= [];
    let b= 0;
    let array = []
    for(let i = 0; i < sortEd.length; i++){
        if(typeof sortEd[i] === 'string'){
            a.push(sortEd[i])
        
        }
        else{
            b += sortEd[i]
        }
    }

   a.push(b)
   return a;

  
  }
  
    console.log(isCosortAndSumnsecutive(1, 3, "a", 4, "f", "e", 5, "c"));