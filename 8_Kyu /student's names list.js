const mean3 = numbers => {
  let sum = 0;
  for (let n in numbers) {
    if (numbers[n] % 3 !== 0) {
      return null;
    }
    sum += numbers[n];
  }
  return numbers.length === 0 ? null : sum / numbers.length;
}