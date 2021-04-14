function isCosortAndSumnsecutive(...arr) {
    // console.log(arr.sort())
    let sortEd = arr.sort()
    let a= [];
    let b= 0;
    let array = []
    for(let i = 0; i < sortEd.length; i++){
        if(typeof sortEd[i] === 'string'){
            a.push(sortEd[i])
            // console.log(a);
        }
        else{
            b += sortEd[i]
        }
    }
    // let split  = a.split('').join('')
    // array = [a,b]
   a.push(b)
   return a;
    // console.log(a);
  
  }
  
    console.log(isCosortAndSumnsecutive(1, 3, "a", 4, "f", "e", 5, "c"));