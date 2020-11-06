
let test ="alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  var str = test;
  var words = str.split(" ");
  for (var i = 0; i < words.length - 1; i++) {
      words[i] += " ";

  }


  // console.log(words);
}

console.log(test("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
