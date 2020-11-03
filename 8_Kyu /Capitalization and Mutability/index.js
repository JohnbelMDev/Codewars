function test(word) {

 let temp = word.charAt(0).toUpperCase()+ word.slice(1)
  return temp;
}

console.log(test("hello"));
