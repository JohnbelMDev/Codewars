function shorter_reverse_longer(b){
     let returncharater = b.replace(/[^a-zA-Z]+/gi, '');

  return returncharater.split('').reverse().join('')
}


console.log(shorter_reverse_longer("kri!!shan"));
