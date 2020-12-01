function test(num)
{
  let temp = num.toString().split('').reverse().join('')

  return parseInt(temp)
}


console.log(test(1243));
