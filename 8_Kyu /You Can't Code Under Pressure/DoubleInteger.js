function doubleInteger(i) {
//   PREP
// 1: Parameter- Because, I'm passing an integer and intengers are numbers, and when I'm doubling an amount, It usually means that I need to add the number by itself. Therefore, I can assume that what I'm passi will be a number
//  2. Because I'm passing an intenger and add  a number by itself. It's safe for me that I will be returning a number of type INT
  // 3.  I have one apple and I want twice as more as I what I already have. I will add that number by itself
//   4 . Declare NumIntenger
//       1: Have NumIntenger variable  to add the number by itself
//       2: convert the numbers to int incase someone pass an decimal
 const numIntenger = parseInt(i) + parseInt( i);

  return numIntenger;
  console.log(numIntenger);
}
