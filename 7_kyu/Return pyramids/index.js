function pyramidSpace(n,i){


  let width = i * 2;
  let leftSpace = (n - i ) - 1
   if(i === n -1 ){
     return ' '.repeat(leftSpace) + '/' + '_'.repeat(width) + '\\'
   }
  return ' '.repeat(leftSpace) + '/' + ' '.repeat(width) + '\\'
}


function pyramid(n){
  //your code here

// ===/\
// ==/==\
// =/====\
// /======\
//
// for each level print out this many -> (n-i) -1 spaces
// put forward after each time I add the space
// next step will be w = i * 2 spaces
// add a backSlash
// add to array

  let backStlash = '/'
  let forwardSlash = '\\';
  // console.log(forwardSlash);

  let newLine = ''
  let i;
  let widthSpace;

  for (i= 0; i < n; i++) {

    newLine = newLine + pyramidSpace(n,i)+'\n';

}

widthSpace = (i-1) * 2;
  return newLine
}

console.log(pyramid(4));
