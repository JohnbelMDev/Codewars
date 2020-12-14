function removeExclamationMarks(s) {
  let temp = s;
    temp = temp.replace(/o/gi,'')
    temp = temp.match(/!/gi,'44',)

  // temp = temp.push(s).toString()
  // console.log(temp);
  return temp

}

console.log(removeExclamationMarks('Hello !!!!!!!!!!!!!!! world'));
