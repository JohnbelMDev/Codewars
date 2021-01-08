// taking a number as my parameter, which is US dollars
// return the intenger in chinese Yuan

function usdcny(usd) {
  let conversion = usd * 6.75
  return `${conversion.toFixed(2)} Chinese Yuan`
}

console.log(usdcny(15));
