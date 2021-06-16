function bestPrice (array){
  return array.reduce((a,b) => a + b) / array.length
}
