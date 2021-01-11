//


function convert(number){
  var ans=''
  var s=''
  for (var i=0; i<number.length; ++i)
  {
    s+=number[i];
      console.log(s);
    if (i%2==1)
    {
      ans+=String.fromCharCode(Number(s))
      s='';
        console.log(s);
    }
      // console.log(s);
  }
  // console.log(s);
  // return ans;
}

console.log(convert('656667'));
