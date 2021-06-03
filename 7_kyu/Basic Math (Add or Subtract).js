// https://www.codewars.com/kata/5809b62808ad92e31b000031/solutions/javascript
// codewars
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

function calculate(str) {
//your code here...
return (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-'))).toString()


}


console.log(calculate("1plus2plus3minus4"));
