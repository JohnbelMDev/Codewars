// taken a number as a parameter
// return the numbers with all zero gone
// example
     // 3203000 => 3203

    // create an empty array
    // start at the last index
    // keep pushing if there are no zero

    function noBoringZeros(x) {
      let a = x.toString().split('');
      for(let i = a.length -1; i >= 0; i--){
        if (a[i] == 0){
            a.pop()
        }else{
            break
        }
      }
    return Number(a.join(''))
    }

    console.log(noBoringZeros(960000));
    console.log(noBoringZeros(1050));
